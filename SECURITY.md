# Security Policy

## Supported version

Security fixes target the latest release on the default branch.

## Reporting a vulnerability

Use GitHub's private vulnerability reporting feature when it is enabled for the repository. Do not open a public issue containing exploit details or sensitive information.

## Local mutation boundary

Add Node and Remove from Brain are local development tools. They must remain unavailable in production and reject non-loopback hosts. Do not deploy the mutation actions as a remote content-management interface without adding authentication, authorization, persistence isolation, audit logging, CSRF protection, rate limiting, and deployment-specific threat modelling.

External nodes accept only absolute HTTP(S) destinations. Internal Live nodes must resolve beneath the application directory. Registry removal must never delete application routes or website files.

