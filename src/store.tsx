import {observable} from 'mobx';


export class SlotFactory {
    @observable won = false;
    @observable wheels = [];
    _prevLastNumbers = [1, 1, 1];
    chanceOfWinning = 50;

    constructor() {
        this.getNumbers();
    }

    public getNumbers() {
        this._setNumbers();
    }

    private _isWon() {
        return this.won =  Math.random() * 100 >= this.chanceOfWinning;
    }

    public changeChanceOfWinning = (winningChance) => {
        this.chanceOfWinning = winningChance;
    }

    private _setNumbers() {
        const isWon = this._isWon();
        let wheels = [[], [], []];
        for(let i = 0; i < 3; i++) {
            wheels[i].push(this._prevLastNumbers[i]);
            wheels[i] = [...wheels[i], ... SlotFactory._fillNumbers()];
            if(isWon) {
                wheels[i][5] = 7;
            }
        }
        this.wheels = wheels;
        this._setPrevLastNumber();
    }

    private _setPrevLastNumber() {
        for(let i = 0; i < 3; i++) {
            this._prevLastNumbers[i] = this.wheels[i][5];
        }
    }

    private static _shuffle(array) {
        let i = array.length;
        let arr = [];
        while (i--) {
            arr.push(array.splice(Math.floor(Math.random() * (i+1)), 1)[0]);
        }
        return arr;

    }


    private static _fillNumbers() {
        const nums: Array<number> = Array.from(Array(10), (_, x) => x);
        return SlotFactory._shuffle(nums);
    }
}
