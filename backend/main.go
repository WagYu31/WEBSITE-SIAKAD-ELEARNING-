package main

import (
	"log"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/handlers"
	"stia-bayuangga/backend/middleware"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	config.InitDatabase()

	// Setup Gin
	r := gin.Default()
	r.Use(middleware.CORS())

	// Health check
	r.GET("/api/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":  "OK",
			"service": "STIA Bayuangga PMB API",
			"version": "1.0.0",
		})
	})

	// PMB Routes
	pmb := r.Group("/api/pmb")
	{
		// Public
		pmb.POST("/register", handlers.RegisterOnline)
		pmb.GET("/status/:no_pendaftaran", handlers.CheckStatus)
		pmb.GET("/stats", handlers.GetStats)
		pmb.POST("/payment", handlers.CreatePayment)
		pmb.GET("/payment/:registration_id", handlers.GetPaymentStatus)

		// BAP (admin)
		pmb.POST("/register/offline", handlers.RegisterOffline)
		pmb.GET("/registrations", handlers.GetRegistrations)
		pmb.GET("/registration/:id", handlers.GetRegistration)
		pmb.PUT("/registration/:id/status", handlers.UpdateStatus)
		pmb.PUT("/payment/:id/confirm", handlers.ConfirmCashPayment)
	}

	log.Println("🚀 STIA Bayuangga PMB API running on :8080")
	if err := r.Run(":8080"); err != nil {
		log.Fatal("❌ Server failed:", err)
	}
}
