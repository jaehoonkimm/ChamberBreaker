class Badge {
  constructor() {
    this.antiVaccine = 0;
    this.globalWarming = 0;
    this.taxCut = 0;
    this.scenario1 = 0;
    this.scenario2 = 0;
    this.scenario3 = 0;
  }

  updateAntiVaccineScore = (score, scenarioNum) => {
    this.antiVaccine = score;
    this.setScenarioScore(score, scenarioNum);
  };

  updateGlobalWarmingScore = (score, scenarioNum) => {
    this.globalWarming = score;
    this.setScenarioScore(score, scenarioNum);
  };

  updateTaxCutScore = (score, scenarioNum) => {
    this.taxCut = score;
    this.setScenarioScore(score, scenarioNum);
  };

  setScenarioScore = (score, scenarioNum) => {
    if (scenarioNum === 1) this.scenario1 = score;
    else if (scenarioNum === 2) this.scenario2 = score;
    else if (scenarioNum === 3) this.scenario3 = score;
  };

  getRank = (score) => {
    if (score >= 900) return 'S';
    else if (score >= 800) return 'A';
    else if (score >= 700) return 'B';
    else return 'F';
  };

  getAntiVaccineBadge = () => {
    const rank = this.getRank(this.antiVaccine);
    if (rank === 'F') return ``;
    return `<img src="../static/images/badge/badge-social-boundary-${rank}.png" class="badge-img">`;
  };

  getGlobalWarmingBadge = () => {
    const rank = this.getRank(this.globalWarming);
    if (rank === 'F') return ``;
    return `<img src="../static/images/badge/badge-information-homogeneity-${rank}.png" class="badge-img">`;
  };

  getTaxCutBadge = () => {
    const rank = this.getRank(this.taxCut);
    if (rank === 'F') return ``;
    return `<img src="../static/images/badge/badge-user-similarity-${rank}.png" class="badge-img">`;
  };

  getScoreBoard = () => {
    const totalScore =
      Number(this.scenario1) + Number(this.scenario2) + Number(this.scenario3);
    const totalScoreTemplate = `
        <p style="font-style: bold;">Total Echo Chamber Score: <span>${totalScore}</span></p>`;
    let scenarioScoreTemplate = `<p class="scenario-score">Scenario1: <span>${this.scenario1}</span></p>`;
    if (this.scenario2 !== 0) {
      scenarioScoreTemplate += `<p class="scenario-score">Scenario2: <span>${this.scenario2}</span></p>`;
    }
    if (this.scenario3 !== 0) {
      scenarioScoreTemplate += `<p class="scenario-score">Scenario3: <span>${this.scenario3}</span></p>`;
    }

    return totalScoreTemplate + scenarioScoreTemplate;
  };

  getBadgeTable = () => {
    return `
        <table class="badge-table">
            <tr class="badge-tr-td">
                <td class="badge-tr-td">
                    ${this.getAntiVaccineBadge()}
                </td>
                <td class="badge-tr-td">
                    ${this.getGlobalWarmingBadge()}
                </td>
                <td class="badge-tr-td">
                    ${this.getTaxCutBadge()}
                </td>
            </tr>
        </table>
        ${this.getScoreBoard()}
        `;
  };

  setScenario1Badge = (user_id, score) => {
    const id = user_id % 6;
    if (id === 0 || id === 1) {
      this.updateGlobalWarmingScore(score, 1);
    }
    if (id === 2 || id === 3) {
      this.updateAntiVaccineScore(score, 1);
    }
    if (id === 4 || id === 5) {
      this.updateTaxCutScore(score, 1);
    }
  };

  setScenario2Badge = (user_id, score) => {
    const id = user_id % 6;
    if (id === 2 || id === 5) {
      this.updateGlobalWarmingScore(score, 2);
    }
    if (id === 0 || id === 4) {
      this.updateAntiVaccineScore(score, 2);
    }
    if (id === 1 || id === 3) {
      this.updateTaxCutScore(score, 2);
    }
  };
}

const badge = new Badge();
export default badge;
