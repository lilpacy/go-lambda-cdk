package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"time"
)

const timeFormat = "2006-01-02 15:04:05"
const messageFormat = "Hello, now is %s!"

// MyEvent ...
type MyEvent struct {
	Name string `json:"name"`
}

// HandleRequest ...
func HandleRequest(ctx context.Context) (events.APIGatewayProxyResponse, error) {
	t := time.Now()
	message := createMessage(t)
	res := events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       message,
	}
	return res, nil
}

func createMessage(t time.Time) string {
	return fmt.Sprintf(messageFormat, t.Format(timeFormat))
}

func main() {
	lambda.Start(HandleRequest)
}
