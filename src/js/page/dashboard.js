import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    try {
      const fetchResponse = await fetch("/data/DATA.json");
      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }
      const response = await fetchResponse.json();
      this._cardStoryItem = response.listStory;
      this._populateCardStoryList(this._cardStoryItem);
      this._populateCardDashboard(this._cardStoryItem);
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },

  _populateCardStoryList(listStory = null) {
    const html = listStory.reduce((accumulator, story) => {
      return accumulator.concat(this.generateListStoryItemTemplate({ ...story }));
    }, "");

    document.getElementById("main-content_list-card").innerHTML += html;
  },

  _populateCardDashboard(listStory = null) {
    document.querySelector("#card_total-story").setAttribute("content", `${listStory.length} Story`);
  },

  generateListStoryItemTemplate(story) {
    return `
    <card-item
      id="${story.id}"
      date="${story.createdAt}"
      image="${story.photoUrl}"
      description="${story.description}"
      name="${story.name}"
    >
    </card-item>
    `;
  },
};

export default Dashboard;
