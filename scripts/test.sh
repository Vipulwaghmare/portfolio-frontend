#!/bin/bash

# Define the port to wait for
PORT=5000

# Command to run after the port is available
COMMAND="cypress open"

# Function to check if the port is open
port_open() {
  (echo >/dev/tcp/localhost/$PORT) &>/dev/null
}

# Function to clean up the background process
cleanup() {
  echo "Cleaning up..."
  pkill -f "serve -s build -l 5000"
}

# Trap the EXIT signal to run the cleanup function
trap cleanup EXIT

# Start the server in the background
serve -s build -l 5000 &

# Wait for the server to fully initialize
sleep 2

# Wait for the port to become available
while ! port_open; do
  echo "Waiting for port $PORT to become available..."
  sleep 1
done

# Run the command after the port is available
echo "Port $PORT is now available. Running the command..."
$COMMAND
