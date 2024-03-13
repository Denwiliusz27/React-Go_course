package main

import (
	"backend/cmd/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// Home w - where I wrte final content I want to send to client
func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go movies up and running",
		Version: "0.0.1",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	var movies []models.Movie
	// real date
	rd, _ := time.Parse("2006-01-02", "1986-03-01")

	highlander := models.Movie{
		ID:          1,
		Title:       "Highlander",
		ReleaseDate: rd,
		MPAARating:  "R",
		Runtime:     116,
		Description: "very good movie for evening",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}
	movies = append(movies, highlander)

	rd, _ = time.Parse("2006-01-02", "1981-06-13")
	rotla := models.Movie{
		ID:          2,
		Title:       "Raiders of the lost Ark",
		ReleaseDate: rd,
		MPAARating:  "R",
		Runtime:     115,
		Description: "not that bad",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}
	movies = append(movies, rotla)

	out, err := json.Marshal(movies)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}
