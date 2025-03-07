package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

type UserSignIn struct {
	UserName string `json:"username"`
	Password string `json:"password"`
}


func main() {
	app := fiber.New()
	app.Use(logger.New())

	app.Static("/", "../client/dist")

	//Post Request
	app.Post("/signin", SignIn)

	app.Get("*", func (c *fiber.Ctx) error {
		return c.SendFile("../client/dist/index.html")
	})

	app.Listen(":3000")
}

func SignIn(c *fiber.Ctx) error {
	info := new(UserSignIn)
	if err := c.BodyParser(info); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid Request",
		})
	}

	fmt.Println("Received response: ", info.UserName, info.Password)

	return c.JSON(fiber.Map{
		"message": "Sign-in successful",
	})
}

