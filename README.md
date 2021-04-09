![Search Page](/images/banner.png)
## Story Evolution Tracker


### Overview
Story evolution tracker is a an application that allows you to find related news at the click of a button. SET interprets a given news article, finds other related articles and builds a timeline of events.

SET is the aggregation of a variety of different microservices deployed on AWS Lambda and EC2 for the purpose of scalability and maintainability. Services communicate using a RabbitMQ message broker. The following sections will describe how to deploy the services and get the system up and running. 

### Requirements
- AWS EC2 Instance & Lambda
- Node 10.13.0
- Python 3.7
### <a name="Installation"></a>How To Deploy

1. **Create or Login to an [AWS account](https://console.aws.amazon.com/)**

2. **Create an EC2 Instance**
- Type "EC2" into the AWS console search bar and click on EC2
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
#Change to root
sudo su

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
This will install docker, docker-compose, git and nvm and ensure the permissions and versions are correct.
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
Edit ```/deliverables/config.json``` with your EC2 public IP, MongoDB uri, email (to send emails from) and AWS_REGION. It should look like this:
```json
{
  "EMAIL_SENDER": "kdkhdyt@gmail.com",
  "AWS_REGION": "us-east-1",
  "PUBLIC_IP": "54.161.37.25",
  "MONGO_DB_URL": "mongodb+srv://dev:j16c8SXcLTlIty1R@cluster0.uwf3u.mongodb.net/articles?retryWrites=true&w=majority"
}
```
10. **Deploy Serverless Functions**
Get the public IP address of your EC2 instance handy. You will need it during deployment.
```bash
/deliverable: 
bash deploy_lambda
```
Ensure your lambdas get deployed to Region us-east-1 (this should be the default so you do not need to worry). You can check this by going to your lambdas in the AWS console and checking in the top right.
- You have to give your EC2 IAM user (arn for your EC2) permissions to execute all of the deployed lambdas. To do this, go to each lambda, configurations, permissions, add permissions and give your EC2 ARN invoke function permissions.
- You also have to give the analysisService-dev-keyphrase function permission to access aws comprehend. To do this, find the IAM role associated with it, and attach the ComprehendFullAccess policy to it.
- For email notifications to work, you must find the IAM role associated with your middleware functions and add the AmazonSESFullAccess policy to it. Furthermore, in SES you must verify your EMAIL_SENDER email from earlier.

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

12. **Start Docker Services:**
```bash
/deliverable:
docker-compose up -d
```
This will start the rabbit forwarding container and custom rabbitMQ.

13. **ENV variable:**
Set /client .env variable
```bash
#Your API domain noted earlier (with https://)
REACT_APP_DOMAIN=https://h5iyxee68b.execute-api.us-east-1.amazonaws.com
# Your EC2 public IP. Ensure it does not have http:// and ending /
REACT_APP_EC2_PUBLIC=ec2-54-161-37-25.compute-1.amazonaws.com
# Leave these default
REACT_APP_RABBIT_USER=client
REACT_APP_RABBIT_PASS=clientpass
```
14. **Build and Start Web App:**
```bash
/deliverable:
cd client

#Install dependencies
/deliverable/client:
npm i

#May have to run this command on small instances
NODE_OPTIONS=--max_old_space_size=800

#Build may fail on small instances due to resource limitations. 
#In this case build on a more powerful system and then transfer
/deliverable/client:
npm run build

#Steps to perform on EC2
#Install serve
/deliverable/client:
npm i -g serve

#Start server
/deliverable/client:
serve -s build
```

15. **Done:**

- Navigate to ```http://<EC2 public IP>:5000```


![Search Page](/images/search.png)


### Authors

* **Kenneth Kreindler** 


