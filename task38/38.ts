function describeCity(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
  }

describeCity('karachi');
describeCity('bangkok', 'thailand');
describeCity('toronto', 'canada');