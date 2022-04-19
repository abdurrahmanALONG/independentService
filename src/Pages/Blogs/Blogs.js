import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <div>
                    <h4> Difference between `authorization` and `authentication`?</h4>
                    <p><span>ANSWER: </span> Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of granting permission  to access your cloud accounts (copy files, restore emails, etc.) on your behalf.Let’s see the difference between authentication and authorization:

                        `Authentication:
                        1.	In authentication process, the identity of users are checked for providing the access to the system.
                        2.In authentication process, users or persons are verified.
                        3.	It needs usually user’s login details.`

                        `Authorization:
                        1.In authorization process, person’s or user’s authorities are checked for accessing the resources.
                        2.In this process, users or persons are validated.
                        3.This process is done after the authentication process.`

                    </p>

                </div>
                <br />
                <div>
                    <h4>Why are you using `firebase`? What other options do you have to implement authentication?</h4>
                    <p><span>ANSWER: </span>  Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.

                        `There are several authentication options available to authenticate users and provide access to resources.

                        #1. Token Authentication
                        #2. Standard Authentication
                        #3. Multi-Factor Authentication (MFA)
                        #4. Passwordless Authentication
                        #5. Social Authentication `</p>
                </div>
                <br />
                <div>
                    <h4> What other services does `firebase` provide other than authentication?</h4>
                    <p><span>ANSWER: </span>
                        Firebase provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance.There are many services which Firebase provides, Most useful of them are:

                        `1.Cloud Firestore
                        2.Cloud Functions
                        3.Hosting
                        4.Cloud Storage
                        5.Google Analytics
                        6.Predictions
                        7.Cloud Messaging
                        8.Dynamic Links
                        9.Remote Config`</p>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;