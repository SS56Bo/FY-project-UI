package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()
	app.Use(logger.New())

	app.Static("/", "../client/dist")

	app.Get("*", func (c *fiber.Ctx) error {
		return c.SendString("../client/dist/index.html")
	})

	app.Listen(":3000")
}



