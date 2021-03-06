import boto3
import os
from botocore.exceptions import ClientError

# Code adjusted from https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-using-sdk-python.html

class SendEmail:
    # Send notification to recipient
    def send(RECIPIENT):

        # Replace sender@example.com with your "From" address.
        # This address must be verified with Amazon SES.
        SENDER = os.environ["EMAIL_SENDER"]

        # Specify a configuration set. If you do not want to use a configuration
        # set, comment the following variable, and the 
        # ConfigurationSetName=CONFIGURATION_SET argument below.
        # CONFIGURATION_SET = "ConfigSet"

        # If necessary, replace us-west-2 with the AWS Region you're using for Amazon SES.
        AWS_REGION = os.environ["AWS_REGION"]

        # The subject line for the email.
        SUBJECT = "Story Evolution Tracker Update"

        # The email body for recipients with non-HTML email clients.
        BODY_TEXT = ("Story Evolution Tracker Update")
                    
        # The HTML body of the email.
        BODY_HTML = """<html>
        <head></head>
        <body>
        <h1>Story Evolution Tracker Update</h1>
        <p>One of your Bookmarked stories has updated. Visit Story Evolution Tracker to view update.</p>
        </body>
        </html>
                    """            

        # The character encoding for the email.
        CHARSET = "UTF-8"
        # Create a new SES resource and specify a region.
        client = boto3.client('ses',region_name=AWS_REGION)

        # Try to send the email.
        try:
            #Provide the contents of the email.
            response = client.send_email(
                Destination={
                    'ToAddresses': [
                        RECIPIENT,
                    ],
                },
                Message={
                    'Body': {
                        'Html': {
                            'Charset': CHARSET,
                            'Data': BODY_HTML,
                        },
                        'Text': {
                            'Charset': CHARSET,
                            'Data': BODY_TEXT,
                        },
                    },
                    'Subject': {
                        'Charset': CHARSET,
                        'Data': SUBJECT,
                    },
                },
                Source=SENDER,
                # If you are not using a configuration set, comment or delete the
                # following line
                # ConfigurationSetName=CONFIGURATION_SET,
            )
        # Display an error if something goes wrong.	
        except ClientError as e:
            print(e.response['Error']['Message'])
        else:
            print("Email sent! Message ID:"),
            print(response['MessageId'])