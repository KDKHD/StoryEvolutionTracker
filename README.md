# Story Evolution Tracker

## <a name="Installation"></a>Quick Start

1. **Create or Login to an AWS account**

2. **Create an EC2 Instance**
- Type EC2 into the AWS console search bar and click on EC2
- Click on instances on the left navigation bar
- Click the orange "Launch Instance" button
- Select "Amazon Linux 2 AMI (HVM), SSD Volume Type"
- Select any type (t2.micro for free tier)
- Click Review and launch
- Save the key pair (will be required to connect)

3. **Connect to Instance**
- Return back to the EC2 AWS page
- Click on your new instance
- Click Connect in the top right
- Connection using any of the methods (SSH is recommended)

4. **Configure Instance**

1. **Clone Repo:**
```bash
git clone https://github.com/KDKHD/fypDeliverable.git
```
1. **Install via npm:**

```bash
npm install -g serverless
```

2. **Set-up your [Provider Credentials](./docs/providers/aws/guide/credentials.md)**. [Watch the video on setting up credentials](https://youtu.be/VUKDRoUdMek)

3. **Create a Service:**

You can create a new service or [install existing services](#how-to-install-a-service).

```bash
# Create a new Serverless Service/Project
serverless create --template aws-nodejs --path my-service
# Change into the newly created directory
cd my-service
```
