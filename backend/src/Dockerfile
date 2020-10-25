FROM python:3.8

# RUN apt-get update -y && \
    # apt-get install -y python3-pip python3-dev

# RUN apt-get update && \
#     apt-get install git

# RUN mkdir /AFAA
#     cd AFAA \
#     git clone https://github.com/pranav2595/American-Football-Analytics-Application.git \
#     cd American-Football-Analytics-Application\backend\src
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
# We copy just the requirements.txt first to leverage Docker cache
# COPY ./requirements.txt /app/requirements.txt

# WORKDIR /AFAA/American-Football-Analytics-Application\backend\src

# RUN pip3 install -r requirements.txt

# COPY . /app

# ENTRYPOINT [ "python" ]

# CMD [ "app.py" ]

# RUN echo 'ping localhost &' > /bootstrap.sh
# RUN echo 'sleep infinity' >> /bootstrap.sh
# RUN chmod +x /bootstrap.sh

# CMD /bootstrap.sh