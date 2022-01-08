FROM openjdk:8-jdk

ENV test_suite="XXXX"
ENV test_environment="XXXX"
ENV protractor_config="protractor-docker.config.js"
# ENV chrome_version=78.0.3904.108

# Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
	&& apt-get update \
	&& apt-get install -y nodejs \
	&& apt-get install -y build-essential \
	&& rm -rf /var/lib/apt/lists/* /var/cache/apt/*

RUN node -v

RUN npm -v

# Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
	&& echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
	&& apt-get update -qqy \
	&& apt-get -qqy install google-chrome-stable \
	&& rm /etc/apt/sources.list.d/google-chrome.list \
	&& rm -rf /var/lib/apt/lists/* /var/cache/apt/* \
	&& sed -i 's/"$HERE\/chrome"/"$HERE\/chrome" --no-sandbox/g' /opt/google/chrome/google-chrome

# Set the working directory as Project
WORKDIR /Project

# Copy all the file to the working directory
COPY /smoke/ /Project

RUN echo $(ls -al)

# Delete the node modules folder
# RUN rm -r node_modules

# Install project dependencies
RUN npm install

RUN npm install -g protractor

RUN npm install jasmine-allure-reporter

RUN npm install -g allure-commandline

# Bypass
#ByPass> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Download the chrome binaries
# RUN ./node_modules/.bin/webdriver-manager update --versions.chrome ${chrome_version}
RUN webdriver-manager update

# #Start protractor test cases 
# RUN ./node_modules/protractor/bin/protractor  ${protractor_config}} --suite ${test_suite} --params.env ${test_environment}

RUN chmod +x ./init.sh

CMD ["sh", "init.sh"]