# Installation
---
We will first need to install Docker into our RPI for the home server. I will also be using [Portainer](https://www.portainer.io/), which is an open source management tool designed to manage Docker environments as well as Kubernetes clusters. Portainer provides a GUI that simplifies management process, making it easier for users to interact without relying solely on the command line

## Docker Installation (Automated) - Recommanded

Run the command below to run the script that installs Docker & docker compose, as well as adding the current user to the docker usergroup.

```shell
wget -qO- https://raw.githubusercontent.com/time0ut07/HomeServer/main/scripts/install_docker.sh | bash
```

Do reboot your RPI after running it.

## Docker Installation (Manual)

Run these command in sequence:

```shell
# Install docker
curl -sSL https://get.docker.com

# Add the current user into the docker group
sudo usermod -aG docker $USER

# Install docker compose for your OS architecture and saves it into /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Change the binary to an executable
sudo chmod +x /usr/local/bin/docker-compose

# Reboot your RPI
reboot
```

## Portainer Installation (Automated)

Run the command below to pull portainer docker image and create a docker for portainer.

```shell
wget -qO- https://raw.githubusercontent.com/time0ut07/HomeServer/main/scripts/install_portainer.sh | bash
```

Once completed, go to `http://localhost:9000`/`https://localhost:9443`

## Portainer Installation (Manual)

Run these command in sequence:

```shell
# Pull portainer docker image
sudo docker pull portainer/portainer-ce:latest

# Create docker for portainer
sudo docker run -d -p 9000:9000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
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
          <td><code>-p 9000:9000 -p 9443:9443</code></td>
          <td>Map ports from the container to the host (Host:Docker)</td>
        </tr>
        <tr>
          <td><code>--name=portainer</code></td>
          <td>Assigned name to the container</td>
        </tr>
        <tr>
          <td><code>--restart=always</code></td>
          <td>Restart the container automatically unless explicitly stopped</td>
        </tr>
        <tr>
          <td><code>-v /var/run/docker.sock:/var/run/docker.sock</code></td>
          <td>Mount the Docker socket to the container for Docker management</td>
        </tr>
        <tr>
          <td><code>-v portainer_data:/data</code></td>
          <td>Mount a volume for persistent data storage</td>
        </tr>
        <tr>
          <td><code>portainer/portainer-ce:latest</code></td>
          <td>Use the latest Portainer image from Docker Hub</td>
        </tr>
      </tbody>
    </table>
  </div>

</details>
