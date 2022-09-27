export const generateID = {
  methods: {
    genID(text) {
      return text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    }
  }
};