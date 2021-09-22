<!--

    Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
    "Sonatype" is a trademark of Sonatype, Inc.

-->
# Sonatype Application Builder

This project simplifies starting application development for front-end, back-end, and full stack applications inside Sonatype's ecosystem. It is meant for everything from quick prototypes to customer facing projects. The front-end and back-end parts of the project are independent and you can choose if you want to use just one, both, or even which parts in your application.

## Getting started

### Create your own repository using this as a template

You can create a new GitHub repository with all of the files from this repository by clicking [Use this template](https://github.com/sonatype/sonatype-application-builder/generate).
Contact the ops team in the #ops Slack channel if you are unable to create a repository.

NOTE: new projects generated from this template should, in general, be private. If you are intentionally generating a public project, please take care to update the README of the new repo to remove Sonatype-specific information (particularly the last two sections of the README, regarding policy evaluations and productization tips), as this information should not be made public.

### Clearing examples

Don't need the example pages anymore? simply run `./clear-examples.sh` and poof, they are gone. Happy coding.

## Requirements

### Required for FE (installed by maven, but you can also use a local install)

* [Node/npm](https://nodejs.org/en/)
* [Yarn](https://www.npmjs.com/package/yarn) - at least version 1.21.1

### Required for BE

* [Java JDK 11](https://jdk.java.net/archive/)

### Optional

* [docker](https://www.docker.com/get-started)
* [docker-compose](https://docs.docker.com/compose/)

## Project Settings

In order to use it effectively after you create a new repository using this as a template, you need to modify the following files with the appropiate values for your project:

* name, version, description and repository url on [`./frontend/package.json`](./frontend/package.json)
* groupId, artifactId, version, name and description on [`pom.xml`](pom.xml)
  * Update the groupId, artifactId and version in the `<parent></parent>` section of the backend [`pom.xml`](./backend/pom.xml) and frontend [`pom.xml`](./frontend/pom.xml)
  * Update the description in the frontend and backend `pom.xml` files as well.
## Building

![CI](https://github.com/sonatype/iweek-pull-to-start/workflows/CI/badge.svg?branch=master)

We tried to make building the product as simple as possible. We have a simple wrapper shell script that runs and builds everything.

### Build Everything (front-end and back-end)

Linux/Mac:

Locally:

```shell
./build.sh
```

Within docker:

```shell
docker-compose build
```

### Building just the front-end

```shell
cd frontend
../mvnw package
```

### Building just the back-end

```shell
cd backend
../mvnw package
```

### Jenkins

Checkout `./Jenkinsfile` and [sample job](https://jenkins.ci.sonatype.dev/job/platform/job/sonatype-application-builder/) for an example CI build.
Reach out to the #ci-cd Slack channel if you need help creating a new Jenkins job.

### Github Actions

Checkout the `.github` folder for a simple actions job. Note this does way less than the Jenkinsfile.

## Serving

### Front End

The FE runs on port 8044 by default. You can change it in [`./frontend/webpack.config.js`](./frontend/webpack.config.js).

If using a local yarn.

```shell
cd frontend
yarn start
```
If using the yarn installed by maven.

```shell
cd frontend
./run.sh
```

### Back End

The backend runs on port 8080 by default. You can change it in [`./backend/src/main/resources/application.yml`](./backend/src/main/resources/application.yml) under property `server.port`.

```shell
cd backend
./run.sh
```

### Running in Docker using docker-compose

```shell
# docker builds and creates image (look ma, no java or node needed on the host)
docker-compose build

# deploy services on docker
docker-compose up -d

# kill it
docker-compose down
```

You can comment out services in [`./docker-compose.yml`](./docker-compose.yml) if you want to run a hybrid approach.

### Frontend Tests

We have included a few tests as examples; they are located at [`./frontend/src/main/components/team/__tests__/Team.test.tsx`](./frontend/src/main/components/team/__tests__/Team.test.tsx).

Notice that:

* The filename ends with `.test.tsx`.
* The file is located in a folder named `__tests__`.

In order to add your own tests you should also fullfil these two conditions.

To execute the tests run `yarn run test` for a single-run execution, or `yarn run test-watch` for the watch mode. To debug the tests take the following steps:

* Run `yarn run test-watch-debug` in the console
* Go to `chrome://inspect` in Google Chrome
* Find and connect to the node process in Chrome by clicking Inspect in Chrome (this will open up a Chrome Dev Tools
window)
* When Dev Tools is first opened, it will be stopped at a breakpoint in Jest. Hit play and you will notice in your
console window that Jest is running the tests.
* Sometimes Jest gets stuck for no reason, refreshing the browser dev-tools window (Ctrl + R) usually solves it.

## File Structures

### ./backend

This has a simple springboot backend that is meant for the API of the template. This application was generated using start.spring.io.

We installed the following modules by default for simplicity:

* devtools (for fast reloads while debugging/building)
* actuator (observability by default, easy to add in metrics)
* prometheus endpoint (for easy pulling of the metrics into a prom database)
* spring-web (for REST)

## Evaluating using policy.ci.sonatype.dev (IQ Server)

We setup evaluations to run as part of the Jenkins CI. See `Jenkinsfile` for details. Note you should update the `applicationId`.

### Known Policy Violations that we waived

#### CVE-2016-1000027

[CVE-2016-1000027](https://policy.ci.sonatype.dev/assets/index.html#/vulnerabilities/CVE-2016-1000027) - Spring-web has an open vulnerability that is more of an awareness campaign about unsafe deserialization. From that report we gathered from piviotal; "Do not use Java serialization for external endpoints, in particular not for unauthorized ones.". Noted.

#### Similar match on io.github.huangjie0515

Similar match on io.github.huangjie0515 : common-tools : 1.0.0-RELEASE ; this is just a false positive.

#### SONATYPE-2017-0655

[SONATYPE-2017-0655](https://policy.ci.sonatype.dev/assets/index.html#/vulnerabilities/sonatype-2017-0655) - Request package vulnerability only applicable for projects using oauth. Since the template has no login security configuration is not applicable. Any projects derived from it should re evaluate this vulnerability

#### SONATYPE-2019-0467

[SONATYPE-2019-0467](https://policy.ci.sonatype.dev/assets/index.html#/vulnerabilities/sonatype-2019-0467) - The reported vulnerability is on the template fn that’s usually used to handle, well, templates.
We are not using lodash directly so definitely not vulnerable on that side. Any projects derived from it should re evaluate this vulnerability.

## What to do to if you wanted to productize this

### Add release job

If you want to publish the project as a release, you'll need to create a 'release' Jenkins job.  No changes should be necessary to the Jenkinsfile since `mavenPipeline` will route to a release pipeline for a release job. See https://docs.sonatype.com/display/CDI/Recommended+Project+Structure.  For OSS projects, you'll also want to update the pom file to use the public-parent from buildsupport  and update the Jenkinsfile setting `usePublicSettingsXmlFile: true,`


### Update license headers

For an internal project, you'll want to keep the Sonatype proprietary license header.  OSS projects should consult https://docs.sonatype.com/display/COM/Open+Sourcing+Projects to determine the correct license to use. Updating the licenses manually could be pretty painful, running `mvnw license:format -e -C -N` from the root directory will add the licenses quickly and consistently.  You will also want to update the pom files and package.json with the correct OSS license.

## Frontend Language Choice

Opinion here at Sonatype is currently divided over whether JavaScript or TypeScript is preferred. Therefore the SAB
is setup to allow either, and the example pages use a bit of both for the sake of demonstration.  Note that in a
real application, you'd typically only use one or the other in the implementation code.

The ability to use either language is facilitated by the use of the `ts-loader` webpack loader (which uses the
TypeScript compiler) to transpile both TypeScript and JavaScript files. The TypeScript compiler is configured not to
check JavaScript files for errors however, allowing the lackadaisical, YOLO-style programming that is desired from a
dynamically-typed language 😜.

Note that at the current time the jest testing infrastructure is only setup for test files to be written in JavaScript.
