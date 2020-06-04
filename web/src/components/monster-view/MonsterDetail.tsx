import React from 'react';
import { Monster } from '../../models/monster';

export interface MonsterDetailProps {
    monster: Monster;
}

export class MonsterDetail extends React.Component<MonsterDetailProps, {}> {
    render() {
        return (
            <div className="monster-detail">
                <div>{this.props.monster.id}</div>
                <div>{this.props.monster.name}</div>
                <div>{this.props.monster.meta}</div>
                <div>{this.props.monster.armorClass}</div>
                <div>{this.props.monster.hitPoints}</div>
                <div>{this.props.monster.speed}</div>
                <div>{this.props.monster.strength}</div>
                <div>{this.props.monster.strMod}</div>
                <div>{this.props.monster.dex}</div>
                <div>{this.props.monster.dexMod}</div>
                <div>{this.props.monster.con}</div>
                <div>{this.props.monster.conMod}</div>
                <div>{this.props.monster.intelligence}</div>
                <div>{this.props.monster.intMod}</div>
                <div>{this.props.monster.wis}</div>
                <div>{this.props.monster.wisMod}</div>
                <div>{this.props.monster.cha}</div>
                <div>{this.props.monster.chaMod}</div>
                <div>{this.props.monster.savingThrows}</div>
                <div>{this.props.monster.skills}</div>
                <div>{this.props.monster.senses}</div>
                <div>{this.props.monster.damageVulnerabilities}</div>
                <div>{this.props.monster.damageResistances}</div>
                <div>{this.props.monster.damageImmunities}</div>
                <div>{this.props.monster.conditionImmunities}</div>
                <div>{this.props.monster.languages}</div>
                <div>{this.props.monster.challenge}</div>
                <div>{this.props.monster.traits}</div>
                <div>{this.props.monster.actions}</div>
                <div>{this.props.monster.legendaryActions}</div>
                <div>{this.props.monster.reactions}</div>
                <div>{this.props.monster.imgUrl}</div>
            </div>
        );
    }
}