-- CREATE DATABASE gamejam;
-- GRANT ALL PRIVILEGES ON gamejam.* TO 'gamemaster'@'localhost';
-- FLUSH PRIVILEGES;

use gamejam;

CREATE TABLE IF NOT EXISTS game_instance (
    id integer AUTO_INCREMENT PRIMARY KEY,
    recordtime bigint NOT NULL,
    creator integer NOT NULL REFERENCES player(id),
    gametype VARCHAR(200) NOT NULL,
    status integer NOT NULL -- negative = over, 0-99 = in preparation, >100 = ongoing
);

CREATE INDEX game_instance_creator ON game_instance (creator);
CREATE INDEX game_instance_gametype ON game_instance (gametype);
CREATE INDEX game_instance_status ON game_instance (status);

CREATE TABLE IF NOT EXISTS player (
    id integer AUTO_INCREMENT PRIMARY KEY,
    recordtime bigint NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    avatar VARCHAR(100) NOT NULL,
    UNIQUE(nickname,avatar)
);

CREATE INDEX player_nickname ON player (nickname);
CREATE INDEX player_avatar ON player (avatar);

insert into player(recordtime,nickname,avatar) values(CURRENT_TIMESTAMP(),'ira','cat');
insert into player(recordtime,nickname,avatar) values(CURRENT_TIMESTAMP(),'jeff','blob');
insert into player(recordtime,nickname,avatar) values(CURRENT_TIMESTAMP(),'jouko','cat');
insert into player(recordtime,nickname,avatar) values(CURRENT_TIMESTAMP(),'anu','cat');
insert into player(recordtime,nickname,avatar) values(CURRENT_TIMESTAMP(),'random','cat');
insert into player(id,recordtime,nickname,avatar) values(0,CURRENT_TIMESTAMP(),'game master','blob');
UPDATE player SET id=0 WHERE nickname = 'game master';


CREATE TABLE IF NOT EXISTS player_game_action (
    id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    player integer NOT NULL REFERENCES player(id),
    game integer NOT NULL REFERENCES game_instance(id),
    recordtime bigint NOT NULL,
    description text NOT NULL,
    phase_before integer NOT NULL, -- negative = over, 0-99 = in preparation, >100 = ongoing
    phase_after integer NOT NULL, -- negative = over, 0-99 = in preparation, >100 = ongoing
    action_parameters JSON NOT NULL,
    UNIQUE(game,phase_before)
);

CREATE INDEX player_game_action_player ON player_game_action (player);
CREATE INDEX player_game_action_game ON player_game_action (game);
CREATE INDEX player_game_action_phase_before ON player_game_action (phase_before);
CREATE INDEX player_game_action_phase_after ON player_game_action (phase_after);


