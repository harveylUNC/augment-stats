# POROTECH AUGMENT STATS (LIGMA LIBRARY)

## INTRODUCTION
* This program/site was developed as a response to Riot Games' initial policy, which prohibited the publication of augment stats derived from their API game data. The policy has since been reversed as a response to this site. See links below:
* https://www.reddit.com/r/CompetitiveTFT/comments/15798je/tft_augment_stats_are_back/
* https://www.reddit.com/r/CompetitiveTFT/comments/15gamcj/regarding_augment_stat_websites_and_the_subreddit/
* https://www.reddit.com/r/CompetitiveTFT/comments/15ggp2j/reponse_to_stats_and_subreddits/
* https://www.reddit.com/r/CompetitiveTFT/comments/15mp05z/update_on_the_removal_of_augment_stats/
* https://www.reddit.com/r/CompetitiveTFT/comments/15sk3wn/patch_1316_and_the_future_of_ligma_library/

## CORE FUNCTIONALITY
* Web Scraping: Uses Python and the Beautiful Soup library to scrape data from lolchess.gg, targeting top 100 players.
* Database Management: Uses Google Cloud SQL to manage and store scraped data.
* Frontend-Backend Communication: Leverages a Heroku PHP intermediary to allow the frontend to access the SQL database.
