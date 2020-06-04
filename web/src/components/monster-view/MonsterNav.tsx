import React from 'react';

export interface MonsterNavProps {
    monsters: {
        name: string;
    }[];
    onMonsterClick(monster: any): void;
}

export class MonsterNav extends React.Component<MonsterNavProps, {}> {
    monsterListItems() {
        return this.props.monsters.map((monster: { name: string }) => {
            return (
                <li key={monster.name} onClick={() => { this.props.onMonsterClick(monster) }}>
                    {monster.name}
                </li>
            )
        })
    }

    render() {
        return (
            <nav className="monster-nav">
                {this.monsterListItems()}
            </nav>
        );
    }
}