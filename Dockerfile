# ============================================
# STIA Bayuangga — Multi-stage Production Build
# ============================================

# Stage 1: Build Go backend
FROM golang:1.25-alpine AS backend-builder
RUN apk add --no-cache gcc musl-dev
WORKDIR /app/backend
COPY backend/go.mod backend/go.sum ./
RUN go mod download
COPY backend/ ./
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /app/server .

# Stage 2: Build Vite frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build

# Stage 3: Production image
FROM alpine:3.19
RUN apk add --no-cache ca-certificates tzdata
ENV TZ=Asia/Jakarta

WORKDIR /app

# Copy Go binary
COPY --from=backend-builder /app/server ./server

# Copy built frontend
COPY --from=frontend-builder /app/dist ./dist

# Create directories for uploads and data
RUN mkdir -p /app/uploads/avatars /app/uploads/pmb /app/data

# Set environment defaults
ENV DB_DRIVER=postgres
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_USER=stia
ENV DB_PASSWORD=stia_secure_2026
ENV DB_NAME=stia_bayuangga
ENV GIN_MODE=release
ENV PORT=8080

EXPOSE 8080

VOLUME ["/app/uploads", "/app/data"]

CMD ["./server"]
