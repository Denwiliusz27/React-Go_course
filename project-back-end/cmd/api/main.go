package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

// application configuration informations
type application struct {
	Domanin string
}

func main() {
	// set application config
	var app application

	// read from command line

	// connect to database

	app.Domanin = "example.com"

	log.Println("Server started on port ", port)

	// Hello is executed when someone send request on "/" endpoint
	//http.HandleFunc("/", Hello)

	// start a web server
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}

}
