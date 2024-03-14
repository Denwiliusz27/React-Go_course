package main

import (
	"backend/cmd/internal/repository"
	"backend/cmd/internal/repository/dbrepo"
	"flag"
	"fmt"
	"log"
	"net/http"
)

const port = 8080

// application configuration informations
type application struct {
	DSN     string //data source name
	Domanin string
	DB      repository.DatabaseRepo
}

func main() {
	// set application config
	var app application

	// read from command line
	flag.StringVar(&app.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=movies sslmode=disable timezone=UTC connect_timeout=5", "Postgres connection string")
	flag.Parse()

	// connect to database
	conn, err := app.connectToDB()
	if err != nil {
		log.Fatal(err)
	}
	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer app.DB.Connection().Close() // closing connection before function main ends

	app.Domanin = "example.com"

	log.Println("Server started on port ", port)

	// Hello is executed when someone send request on "/" endpoint
	//http.HandleFunc("/", Hello)

	// start a web server
	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}

}
