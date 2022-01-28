require('dotenv').config();


const{CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
dialect: "postgres",
 dialectOptions: {
        ssl: {
            rejectUnauthorized: false
    }
}
})
module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists charecters;
            drop table if exists Arcs;

            create table arcs (
                arcs_id serial primary key,
                name varchar(50)
            );
                
            create table charecters(
                charecters_id serial primary key,
                name varchar(50)
            );

            insert into arcs (name)
            values ('East Blue'),
            ('Alabasta'),
            ('Sky-Island'),
            ('Water Seven'),
            ('Thriller Bark'),
            ('Summit War'),
            ('Fishman-Island'),
            ('Dressrosa'),
            ('Four Emperors');
            

            insert into charecters (name)
            values ('Monkey.D.Luffy'),
            ('Roronoa Zoro'),
            ('Nami'),
            ('Usopp'),
            ('Sanji'),
            ('Tony Tony Chopper'),
            ('Nico Robin'),
            ('Franky'),
            ('Brook'),
            ('Jinbei'),
            ('Ace'),
            ('Sabo'),
            ('Gold.D.Roger'),
            ('Monkey.D.Dragon'),
            ('Kaido'),
            ('Big Mom'),
            ('Shanks'),
            ('Marshall.D.Teach'),
            ('edward newgate(whitebeard)');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },

    getCharecters: (req, res) =>{
        sequelize.query(`SELECT * FROM charecters`)
        .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    getArcs: (req, res) =>{
        sequelize.query(`SELECT * FROM arcs`)
        .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
    };

