package config

import (
	"log"

	"stia-bayuangga/backend/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func InitDatabase() {
	var err error
	DB, err = gorm.Open(sqlite.Open("pmb.db"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal("❌ Failed to connect to database:", err)
	}

	// Auto migrate
	err = DB.AutoMigrate(&models.Registration{}, &models.Payment{})
	if err != nil {
		log.Fatal("❌ Failed to migrate database:", err)
	}

	log.Println("✅ Database connected & migrated (SQLite: pmb.db)")
}
