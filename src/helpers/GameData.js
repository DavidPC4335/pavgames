import { gameData } from "game-config";
import { gameConfig } from "game-config";

export const getNonEducationalTimeAvailable = (userData) => {
    try{
    if(!userData.gameData){
        return -1;
    }
    var nonEducationalTime = 0;
    var educationalTime = 0;
    for(var userGame of userData.gameData){
        if(gameData[userGame.game].isEducational){
            educationalTime += userGame.playtime;
        }else{
            nonEducationalTime += userGame.playtime;
        }
    }
    return (educationalTime - nonEducationalTime)*gameConfig.nonEducationalTimeRatio;

    }catch(e){
        console.error(e);
        return -1;
    }
    
}
