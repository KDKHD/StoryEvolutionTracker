# Story Evolution Tracker

## <a name="Installation"></a>How To Deploy

1. **Create or Login to an [AWS account](https://console.aws.amazon.com/)**

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
```bash
#Install git
sudo yum install git -y

#Update yum
sudo yum update -y;

#Install Docker
sudo amazon-linux-extras install docker;

#Start Docker
sudo service docker start;

#Set permissions for Docker
sudo usermod -a -G docker ec2-user;

#Logout and log back in for permissions to take affect

#Start Docker again
sudo service docker start

#Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

#Activate nvm
. ~/.nvm/nvm.sh

#Install node
nvm install node

#Install node 10.13.0
nvm install 10.13.0

#Activate 10.13.0
nvm use 10.13.0
```
This will install docker, docker-compose and git and ensure the permissions are correct.
5. **Clone Repo:**
```bash
git clone https://github.com/KDKHD/fypDeliverable.git
```
6. **Install Dependencies:**
```bash
/: 
cd deliverable

#Install global npm packages
/deliverable: 
npm i -g serverless

/deliverable: 
sudo npm i -g serverless-offline

/deliverable: 
sudo npm i -g serverless-webpack

/deliverable:
sudo npm i -g serverless-python-requirements

/deliverable: 
cd graphQL_API 

#Install API npm packages
/deliverable/graphQL_API: 
npm i 

/deliverable/graphQL_API: 
cd ..

```
7. **Set-up your [AWS Credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/):**
- Generate AWS API Key & Secret in your AWS console Security Credentials Settings and save them:
```bash
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```

Or 
- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and run:
```bash
aws configure
```
8. **Create MongoDB**
Create a MongoDB (Mongo atlas is recommended). Note down the connection uri for the next step. Create a database called ```articles```. The connection uri should look like this:
```
mongodb+srv://<USER>:<PASSWORD>@<HOST>/articles?retryWrites=true&w=majority
```
9. **Config Serverless Files**
Edit ```/deliverables/config.json``` with your EC2 public IP and MongoDB uri. It should look like this:
```json
{
  "PUBLIC_IP": "ec2-52-207-231-70.compute-1.amazonaws.com",
  "MONGO_DB_URL": "mongodb+srv://<USER>:<PASSWORD>@<HOST>/articles?retryWrites=true&w=majority"
}
```
10. **Deploy Serverless Functions**
Get the public IP address of your EC2 instance handy. You will need it during deployment.
```bash
/deliverable: 
bash deploy_lambda
```
Ensure your lambdas get deployed to Region us-east-1 (this should be the default so you do not need to worry). You can check this by going to your lambdas in the AWS console and checking in the top right.

11. **Config Mapping File**
- Find your AWS account ID (by click on your username in the top right, and the string of numbers next to "My Account")
- Edit ```/mapping.json``` and replace all the account IDs in the target ARNs with your own account ID. ARNs should look like this:
```
arn:aws:lambda:us-east-1:<YOUR ACCOUNT ID>:function:similarityService-dev-googleDork
arn:aws:lambda:us-east-1:<YOUR ACCOUNT ID>:function:analysisService-dev-keyphrase
arn:aws:lambda:us-east-1:<YOUR ACCOUNT ID>:function:ingestionService-dev-articleIngest
arn:aws:lambda:us-east-1:<YOUR ACCOUNT ID>:function:middlewareService-dev-userService
```
If you are using vim, the replace command is:
```bash
:%s/<CURRENT ACCOUNT ID>/<YOUR ACCOUNT ID>/g
```

12. **Deploy Client APP:**
- Find the API endpoint for your serverless API. Go to AWS console lambdas, click ```gqlAPI-dev-search```, click ```API Gateway```, click ```Details``` and note down the domain (without /dev/...)
- In ```/client/package``` replace the ```proxy``` value with the url noted in the previous step (make sure you have http:// and not https://)
- Install packages and start the react server
```bash
#Install dependencies
/deliverable/client:
npm i

```

13. **Start Docker Services:**
```bash
/deliverable:
Docker-compose up
```
This will start the rabbit forwarding container, custom rabbitMQ and React app

14. **Done:**

- Navigate to ```http://<EC2 public IP>```

