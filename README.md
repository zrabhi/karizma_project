# karizma_project

to ran this application :

- create 'server/.env' file :

GOOGLE_CLIENT_ID="346819210034-5dd0405gask4gdger6lu89dj3fagfidj.apps.googleusercontent.com"
GOOGLE_SECRECT_ID="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"


POSTGRES_USER="testAdmin"
POSTGRES_DB="testAdmin"
POSTGRES_PASSWORD="Admin"
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}"



PORT=8080


1. run database : `docker compose up --build`
2. Backend :`cd server `

   - migarate prisma : `npx pris ma migrate dev -n init --schema=./src/database/schema.prisma`
   - run main app : `npm run start:dev`

3. Frontend : `cd client `

   - run main app : `npm run dev `
   - 
   Go to `http://localhost:3000/signUp `
