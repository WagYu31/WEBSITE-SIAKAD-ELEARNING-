package config

import (
	"fmt"
	"log"
	"os"

	"stia-bayuangga/backend/models"

	"gorm.io/driver/postgres"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func InitDatabase() {
	var err error
	driver := os.Getenv("DB_DRIVER")

	gormCfg := &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	}

	if driver == "postgres" {
		// PostgreSQL (Production)
		dsn := fmt.Sprintf(
			"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable TimeZone=Asia/Jakarta",
			getEnv("DB_HOST", "localhost"),
			getEnv("DB_PORT", "5432"),
			getEnv("DB_USER", "stia"),
			getEnv("DB_PASSWORD", "stia_secure_2026"),
			getEnv("DB_NAME", "stia_bayuangga"),
		)
		DB, err = gorm.Open(postgres.Open(dsn), gormCfg)
		if err != nil {
			log.Fatal("❌ Failed to connect to PostgreSQL:", err)
		}
		log.Println("✅ Database connected (PostgreSQL)")
	} else {
		// SQLite (Development — default)
		dbPath := getEnv("DB_PATH", "pmb.db")
		DB, err = gorm.Open(sqlite.Open(dbPath), gormCfg)
		if err != nil {
			log.Fatal("❌ Failed to connect to SQLite:", err)
		}
		log.Println("✅ Database connected (SQLite:", dbPath+")")
	}

	// Auto migrate
	err = DB.AutoMigrate(&models.Registration{}, &models.Payment{}, &models.Account{}, &models.EmailLog{}, &models.Dosen{})
	if err != nil {
		log.Fatal("❌ Failed to migrate database:", err)
	}
	log.Println("✅ Database migrated successfully")
}

func getEnv(key, fallback string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}
	return fallback
}
