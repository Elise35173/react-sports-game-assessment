import React from 'react';
import Team from '../team/Team';
import ScoreBoard from '../scoreboard/Scoreboard';
import AudioOne from './assets/Back+Board.wav';
import AudioTwo from './assets/Swish.wav';
import AudioThree from './assets/shotclockhorn.wav';



class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            resetCount: 0,
            homeTeamStats: {
                shotsTaken: 0,
                score: 0,
            },
            visitingTeamStats: {
                shotsTaken: 0,
                score: 0,
            }
        }

        this.shotSound = new Audio(AudioOne)
        this.scoreSound = new Audio(AudioTwo)
        this.resetSound = new Audio(AudioThree)
    }
    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        this.shotSound.play()
        if (Math.random() > 0.5) {
            score += 1
            setTimeout(() => {
                this.scoreSound.play()
            }, 650)
        }
        this.setState((state, props) => ({
            [teamStatsKey]: {
                shotsTaken: state[teamStatsKey].shotsTaken + 1,
                score
            }
        }))
    }
    resetGame = () => {
        this.resetSound.play()
        this.setState((state, props) => ({
            resetCount: state.resetCount + 1,
            homeTeamStats: {
                shotsTaken: 0,
                score: 0,
            },
            visitingTeamStats: {
                shotsTaken: 0,
                score: 0,
            }
        }))
    }
    render() {
        return (
            <div className='Game'>
                <ScoreBoard
                    visitingTeamStats={this.state.visitingTeamStats}
                    homeTeamStats={this.state.homeTeamStats}
                />
                <h1>Welcome to {this.props.venue}</h1>
                <div className='stats'>
                    <Team
                        name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logoSrc}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')}
                    />
                    <div className='versus'>
                        <h1>VS</h1>
                        <div>
                            <strong>Resets:</strong> {this.state.resetCount}
                            <button onClick={this.resetGame}>Reset Game</button>
                        </div>
                    </div>
                    <Team
                        name={this.props.visitingTeam.name}
                        logo={this.props.visitingTeam.logoSrc}
                        stats={this.state.visitingTeamStats}
                        shotHandler={() => this.shoot('visiting')}
                    />
                </div>
            </div>
        )
    }
}

export default Game;
