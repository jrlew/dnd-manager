import React from 'react';
import { Monster } from '../../models/monster';
import './Monster.css';
import { MonsterDetail } from './MonsterDetail';
import { MonsterNav } from './MonsterNav';

export interface MonsterViewState {
    monsters: Monster[];
    currentMonster: any;
    error: any;
}

export class MonsterView extends React.Component<{}, MonsterViewState> {
    state: MonsterViewState = {
        monsters: [],
        currentMonster: {},
        error: null,
    };

    componentDidMount() {
        const query = `
            query monsters { 
                allMonsters {
                    id
                    name
                    meta
                    armorClass
                    hitPoints
                    speed
                    strength
                    strMod
                    dex
                    dexMod
                    con
                    conMod
                    intelligence
                    intMod
                    wis
                    wisMod
                    cha
                    chaMod
                    savingThrows
                    skills
                    senses
                    damageVulnerabilities
                    damageResistances
                    damageImmunities
                    conditionImmunities
                    languages
                    challenge
                    traits
                    actions
                    legendaryActions
                    reactions
                    imgUrl
                }
            }
        `
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query
            })
        })
            .then(r => r.json())
            .then(data => {
                console.log('data returned:', data);
                this.setState({
                    monsters: data.data.allMonsters,
                    currentMonster: data.data.allMonsters[0]
                });
            });
    }

    handleMonsterClick = (monster: any) => {
        this.setState({ currentMonster: monster });
    }

    render() {
        return (
            <div className="monster-view">
                <MonsterNav
                    monsters={this.state.monsters}
                    onMonsterClick={this.handleMonsterClick}
                />
                <MonsterDetail
                    monster={this.state.currentMonster}
                />
            </div>
        )
    }
}