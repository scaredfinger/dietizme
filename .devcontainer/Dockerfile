# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:22

# Install pnpm
RUN npm install -g pnpm

# Install prerequisites for Docker installation.
RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker’s official GPG key.
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up the Docker repository.
RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
    | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install the latest Docker CLI and the Docker Compose plugin.
RUN apt-get update && apt-get install -y docker-ce-cli docker-compose-plugin

# Symlink the Docker Compose plugin to the expected location.
RUN ln -sf /usr/libexec/docker/cli-plugins/docker-compose /usr/local/bin/docker-compose

# Install Nhost CLI globally
RUN sudo curl -L https://raw.githubusercontent.com/nhost/cli/main/get.sh | bash

# Add node user to the docker group
RUN groupadd docker && usermod -aG docker node

# Set the working directory
WORKDIR /workspace
