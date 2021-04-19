# Not Yahoo Answers

Like many bored developers in quarantine I've decided to start project #483 with the insane amount of free time I have. I was never an avid user of Yahoo! Answers but as a young lad looking for answers on the internet it would show up sometimes. This project isn't meant to be a complete rebuild of the site as it is now but just something to do to pass the time as well as try out new libraries and features.

## Tech Stack

**Client:** React, TailwindCSS, Typescript, GraphQL

**Server:** Prisma, Apollo Server, Nexus

## Environment Variables

There is a sample environment variable file provided with the project, to get up and running you need to rename the file to just `.env` and fill out the values.

## Run Locally

Clone the project

```bash
git clone https://github.com/nulfrost/not-yahoo-answers.git
```

Go to the project directory

```bash
cd not-yahoo-answers
```

Install dependencies

```bash
npm install
```

This project uses postgres as its database, to get up and running quickly I suggest using docker. You can use any method you like to install postgres though.

```bash
docker pull postgres
docker run --name postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=<your password> postgres
```

Then run the migrations and seed the database.

```bash
npx prisma migrate dev
npx prisma db seed --preview-feature
```

Finally run the project

```bash
npm run dev
```

## Running Tests

TODO

## License

[MIT](https://github.com/nulfrost/not-yahoo-answers/blob/main/LICENSE)
