package main

import (
	"log"
	"os"

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
		pmb.PUT("/registration/:id", handlers.UpdateRegistration)
		pmb.DELETE("/registration/:id", handlers.DeleteRegistration)
		pmb.POST("/registration/:id/upload", handlers.UploadDocuments)
		pmb.PUT("/payment/:id/confirm", handlers.ConfirmCashPayment)

		// Account & Validation
		pmb.GET("/validate/:token", handlers.ValidateAccountByEmail)
		pmb.PUT("/account/:id/validate", handlers.ValidateAccountByBAP)
		pmb.POST("/account/create", handlers.BAPCreateAccount)
		pmb.GET("/account/:registration_id", handlers.GetAccountByRegistration)
	}

	// Profile Routes
	profile := r.Group("/api/profile")
	{
		profile.GET("/:nim", handlers.GetProfile)
		profile.PUT("/:nim", handlers.UpdateProfile)
		profile.POST("/:nim/avatar", handlers.UploadAvatar)
		profile.PUT("/:nim/password", handlers.ChangePassword)
	}

	// Serve uploaded files (avatars, documents)
	r.Static("/uploads", "./uploads")

	// In production, serve the built frontend (./dist)
	if os.Getenv("GIN_MODE") == "release" {
		r.Static("/assets", "./dist/assets")
		r.StaticFile("/", "./dist/index.html")
		r.NoRoute(func(c *gin.Context) {
			c.File("./dist/index.html")
		})
		log.Println("📦 Serving static frontend from ./dist")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("🚀 STIA Bayuangga API running on :%s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("❌ Server failed:", err)
	}
}
