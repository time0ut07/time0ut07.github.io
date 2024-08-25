# Filebrowser - Installation

There are many different ways to start a filebrowser container.

## Automated

Run the command below to pull filebrowser docker image and create a docker for filebrowser.

```shell
wget -qO- https://raw.githubusercontent.com/time0ut07/HomeServer/main/scripts/install_filebrowser.sh | bash
```

## Portainer

## Docker Run

Run these command in sequence:

```shell
# Create a new directory
sudo mkdir -p /home/$USER/docker/filebrowser
  
# Pull filebrowser docker image
docker pull filebrowser/filebrowser:latest

# Create docker for filebrowser
docker run -d -p 8001:80 --name filebrowser --restart unless-stopped -v /home/$USER/docker:/srv -v /home/$USER/docker/filebrowser/filebrowser.db:/database/filebrowser.db -v /home/$USER/docker/filebrowser/settings.json:/config/settings.json -e PUID=$(id -u) -e PGID=$(id -g) filebrowser/filebrowser:latest
```

<details close>
  <summary>Command Breakdown</summary>

  <div style="margin-bottom: 1em;">
    <p>The following table explains the options used in the Docker Creation command:</p>

    <!-- Markdown Table -->
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>-d</code></td>
          <td>Run the container in detached mode (background)</td>
        </tr>
        <tr>
          <td><code>-p 8001:80</code></td>
          <td>Map port 80 in the container to port 8001 on the host (Host:Docker)</td>
        </tr>
        <tr>
          <td><code>--name=filebrowser</code></td>
          <td>Assigned name "filebrowser" to the container</td>
        </tr>
        <tr>
          <td><code>--restart=unless-stopped</code></td>
          <td>Restart the container automatically unless it is explicitly stopped</td>
        </tr>
        <tr>
          <td><code>-v /home/$USER/docker:/srv</code></td>
          <td>Mount local directory <code>/home/$USER</code> to <code>/srv</code> in the container</td>
        </tr>
        <tr>
          <td><code>-v /home/$USER/docker/filebrowser/filebrowser.db:/database/filebrowser.db</code></td>
          <td>Mount local file for the File Browser database to <code>/database/filebrowser.db</code> in the container</td>
        </tr>
        <tr>
          <td><code>-v /home/$USER/docker/filebrowser/settings.json:/config/settings.json</code></td>
          <td>Mount local settings file to <code>/config/settings.json</code> in the container</td>
        </tr>
        <tr>
          <td><code>-e PUID=$(id -u)</code></td>
          <td>Set user ID inside the container to match the user user ID</td>
        </tr>
        <tr>
          <td><code>-e PGID=$(id -g)</code></td>
          <td>Set group ID inside the container to match the user group ID</td>
        </tr>
        <tr>
          <td><code>filebrowser/filebrowser:latest</code></td>
          <td>Use latest File Browser image from Docker Hub</td>
        </tr>
      </tbody>
    </table>
  </div>

</details>


## Docker Compose

Run these command in sequence:

```shell
# Create a new directory
sudo mkdir -p /home/$USER/docker/filebrowser

# Find PUID
id -u

# Find PGID
id -g
```

Create a new file: docker-compose.yml and add the text below (do change PUID & PGID accordingly).

```shell
nano docker-compose.yml
```

```yml
version: '3.8'

services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    container_name: filebrowser
    restart: unless-stopped
    ports:
      - "8001:80"
    volumes:
      - /home/$USER/docker:/srv
      - /home/$USER/docker/filebrowser/filebrowser.db:/database/filebrowser.db
      - /home/$USER/docker/filebrowser/settings.json:/config/settings.json
    environment:
      - PUID=YOUR PUID HERE
      - PGID=YOUR PGID HERE
```

Once you have docker-compose.yml ready, run the following command:

```shell
docker-compose up -d
```