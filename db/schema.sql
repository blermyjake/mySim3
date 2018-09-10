
CREATE TABLE getUser
(
   userid SERIAL PRIMARY KEY,
   username VARCHAR(20),
   password VARCHAR(20),
   profile_pic TEXT
);

CREATE TABLE "public"."addUser" (
    "id" serial,
    "title" varchar(45),
    "img" text,
    "content" text,
    "author_id" integer,
    PRIMARY KEY ("id"),
    CONSTRAINT "ref users" FOREIGN KEY ("author_id") REFERENCES "public"."getUser"("id") ON UPDATE CASCADE
);

-- insert
INSERT INTO "getUser"
   (username, password, profile_pic)
VALUES
   ('Ronald', '1234', 'https://media.gettyimages.com/photos/stop-staring-now-picture-id472857244?b=1&k=6&m=472857244&s=612x612&w=0&h=6JasXCyx5fGvlxp9vLtxnKD8ySMqY9vCxx2S905W5GI=')

-- postUser table and join"
CREATE TABLE postUser
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  img TEXT,
  content TEXT,
  authorID INTEGER REFERENCES "getUser"(id)
);