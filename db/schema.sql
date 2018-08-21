CREATE TABLE "public"."getUser" (
    "id" serial,
    "username" varchar(20),
    "password" varchar(20),
    "profile_pic" text,
    PRIMARY KEY ("id")
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
