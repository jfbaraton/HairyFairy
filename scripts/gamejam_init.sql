use gamejam;

CREATE TABLE IF NOT EXISTS game_instance (
    id integer AUTO_INCREMENT PRIMARY KEY,
    recordtime bigint NOT NULL,
    creator integer NOT NULL REFERENCES player(id),
    gametype VARCHAR(200) NOT NULL,
    phase integer NOT NULL -- negative = over, 0-99 = in preparation, >100 = ongoing
);

CREATE INDEX game_instance_creator ON game_instance (creator);
CREATE INDEX game_instance_gametype ON game_instance (gametype);
CREATE INDEX game_instance_phase ON game_instance (phase);

CREATE TABLE IF NOT EXISTS player (
    id integer AUTO_INCREMENT PRIMARY KEY,
    recordtime bigint NOT NULL,
    nickname VARCHAR(200) NOT NULL,
    avatar VARCHAR(200) NOT NULL
);

CREATE INDEX player_nickname ON player (nickname);
CREATE INDEX player_avatar ON player (avatar);

CREATE TABLE IF NOT EXISTS player_game_action (
    id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    player integer NOT NULL REFERENCES player(id),
    game integer NOT NULL REFERENCES game_instance(id),
    recordtime bigint NOT NULL,
    description text NOT NULL,
    phase_before integer NOT NULL, -- negative = over, 0-99 = in preparation, >100 = ongoing
    phase_after integer NOT NULL, -- negative = over, 0-99 = in preparation, >100 = ongoing
    action_parameters JSON NOT NULL
);

CREATE INDEX player_game_action_player ON player_game_action (player);
CREATE INDEX player_game_action_game ON player_game_action (game);
CREATE INDEX player_game_action_phase_before ON player_game_action (phase_before);
CREATE INDEX player_game_action_phase_after ON player_game_action (phase_after);


