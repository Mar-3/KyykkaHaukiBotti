import Puppeteer from "puppeteer";
import fetch from "node-fetch"

/*const fs = require("fs/promises")
const $ = require('cheerio');
const {find} = require("cheerio/lib/api/traversing");*/

const add = {
    getHauki: async (nimi) => {
        const res = await fetch("https://kyykka.com/api/teams/463/?season=25");
        const data = await res.json()
        const player = data["2024"].players.filter((el) => el.player_name.includes(nimi))[0];
        console.log(player)
        if (!player) { return false }
        const result = {
            name: player.player_name,
            hauet: player.pikes_total
        };
        //console.log(result)
        console.log(result)
        console.log("Player Found!");
        return result.hauet;

    },

    getTeamUrl: async (team) => {
        /*
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, {waitUntil: "networkidle2"});
        const [linkHandler] = await page.$x(`/html/body/div/div/main/div/div/div/div/div[2]/div/table/tbody/tr/td[2][contains(., '${team}')]`);
        if(linkHandler){
            console.log("URL found")
            await linkHandler.click();
            await page.waitForNavigation();
        }
        await browser.close();
        let teamURL = page.url();
        */


        return "https://kyykka.com/joukkue/463";
    }
};

export default add