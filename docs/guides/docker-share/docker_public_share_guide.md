---
sidebar_position: 10
sidebar_label: Public Share
---

# Docker Public Share

With zrok and Docker, you can publicly share a web server that's running in a local container or anywhere that's reachable by the zrok container. The share can be reached through a public URL thats temporary or reserved (persistent).

## Walkthrough Video

<iframe width="100%" height="315" src="https://www.youtube.com/embed/ycov--9ZtB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Before You Begin

To follow this guide you will need [Docker](https://docs.docker.com/get-docker/) and [the Docker Compose plugin](https://docs.docker.com/compose/install/) for running `docker compose` commands in your terminal.

## Temporary or Reserved Public Share

A temporary public share is a great way to share a web server running in a container with someone else for a short time. A reserved public share is a great way to share a reliable web server running in a container with someone else for a long time.

1. Make a folder on your computer to use as a Docker Compose project for your zrok public share.
1. In your terminal, change directory to the newly-created project folder.
1. Download either [the temporary public share project file](pathname:///zrok-public-share/compose.yml) or [the reserved public share project file](pathname:///zrok-public-share-reserved/compose.yml) into the project folder.
1. Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named `.env` in the same folder like this:

    ```bash title=".env"
    ZROK_ENABLE_TOKEN="8UL9-48rN0ua"
    ```

1. Set the zrok API endpoint if self-hosting zrok. Skip this if using zrok.io.

    ```bash title=".env"
    ZROK_API_ENDPOINT="https://zrok.example.com"
    ```

1. Run the Compose project to start sharing the built-in demo web server.

    ```bash
    docker compose up --detach
    ```

1. Get the public share URL from the output of the `zrok-share` service.

    ```bash
    docker compose logs zrok-share
    ```

    ```buttonless title="Output"
    zrok-public-share-1  |  https://w6r1vesearkj.in.zrok.io/
    ```

This concludes sharing the demo web server. Read on to learn how to pivot to sharing any web server leveraging additional zrok backend modes.

## Share Any Web Server or Static HTML Site

You can override the base configuration of the public share Compose project with a `compose.override.yml` file. This allows you to share any web server with the `proxy` backend mode, or any filesystem directory as a static HTML site with the `web` mode. Run `zrok public share --help` for more information about the available options.

### Customize a Temporary Public Share

1. Create a file `compose.override.yml`. You may leverage any backend mode and upstream server address with this approach. This example demonstrates sharing a directory `/tmp/html` from the host filesystem.

    ```yaml title="compose.override.yml"
    services:
      zrok-share:
        command: share public --headless --backend-mode web /tmp/html
        volumes:
          - /tmp/html:/tmp/html
    ```

1. Re-run the project to load the new configuration.

    ```bash
    docker compose up --force-recreate
    ```

1. Get the new tempoary public share URL for the `zrok-share` container.

    ```bash
    docker compose logs zrok-share
    ```

    ```buttonless title="Output"
    zrok-public-share-1  |  https://w6r1vesearkj.in.zrok.io/
    ```

### Customize a Reserved Public Share

1. Create a file `compose.override.yml`. You may leverage any backend mode and upstream server address with this approach. This example demonstrates adding and sharing a new web server container named `httpbin`.

    ```yaml title="compose.override.yml"
    services:
      zrok-share:
        command: -- share reserved --headless --override-endpoint http://httpbin:8080
      httpbin:
        image: mccutchen/go-httpbin  # 8080/tcp
    ```

1. Re-run the project to load the new configuration.

    ```bash
    docker compose up --force-recreate
    ```

1. The reserved public share's URL doesn't change as long as you keep using the same zrok backend mode, e.g. `proxy`, but you can remind yourself of the reserved public share URL by peeking at the logs of the `zrok-share` container.

    ```bash
    docker compose logs zrok-share
    ```

    ```buttonless title="Output"
    INFO: zrok public URL: https://88s803f2qvao.in.staging.zrok.io/
    ```

#### Change the Reserved Public Share Backend Mode

Changing the backend mode of a reserved public share requires creating a new share.

1. Destroy the existing environment. zrok itself does not require a new environment for a new share, but the Compose project has no way to distinguish between the old and new share so a new environment is recommended to ensure the intended resource is shared.

    ```bash
    docker compose down --volumes
    ```

1. Modify the `compose.override.yml` file to use a different backend mode. This example demonstrates changing the backend mode to `web` and sharing a static HTML directory `/tmp/html` from the Docker host's filesystem.

    ```yaml title="compose.override.yml"
    services:
      zrok-reserve:
        command: -- reserve public --backend-mode web /tmp/html
      zrok-share:
        command: -- share reserved --headless
        volumes:
          - /tmp/html:/tmp/html
    ```

## Destroy the zrok Environment

This destroys the Docker volumes containing the zrok environment secrets. The zrok environment can also be destroyed in the web console.

```bash
docker compose down --volumes
```
