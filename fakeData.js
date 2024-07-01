import { faker } from "@faker-js/faker"
import { dbConnect } from "./db.js"
import Utilisateur from "./models/user.js"

dbConnect()

const generateTestData = async (numUsers = 10) => {
  for (let i = 0; i < numUsers; i++) {
    const newUser = new Utilisateur({
      nom: faker.person.lastName(),
      date_creation: faker.date.past(),
      prenom: faker.person.firstName(),
      telephone: faker.phone.number(),
      password: faker.internet.password(),
      adresse: faker.location.streetAddress(),
      daten: faker.date.birthdate(),
      cin: faker.string.alphanumeric(10).toUpperCase(),
      posteTravail: faker.person.jobTitle(),
      PPR: faker.string.alphanumeric(12).toUpperCase(),
      user_type: faker.helpers.arrayElement(["ADMIN", "USER"]),
    })

    try {
      await newUser.save()
      console.log(`User ${i + 1} created:`, newUser)
    } catch (error) {
      console.error(`Error creating user ${i + 1}:`, error.message)
    }
  }
}

generateTestData()
