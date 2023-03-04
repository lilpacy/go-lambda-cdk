package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"
	"time"
)

const timeFormat = "2006-01-02 15:04:05"
const messageFormat = "Hello, now is %s!"

// MyEvent ...
type MyEvent struct {
	Name string `json:"name"`
}

type MyResponse struct {
	Message string `json:"message"`
}

// HandleRequest ...
func HandleRequest(ctx context.Context) (MyResponse, error) {
	t := time.Now()
	message := createMessage(t)
	res := MyResponse{
		Message: message,
	}
	return res, nil
}

func createMessage(t time.Time) string {
	return fmt.Sprintf(messageFormat, t.Format(timeFormat))
}

func main() {
	lambda.Start(HandleRequest)
}
