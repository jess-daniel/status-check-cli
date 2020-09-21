const menus = {
  main: `
      status-check [command] <options>

      ping .............. ping the resource
      forecast ........... show 10-day weather forecast
      version ............ show package version
      help ............... show help menu for a command`,

  ping: `
      status-check ping <options>
      
      --name, -n ..... the name of the resource
      --url, -u ..... the url of the resource
      `,

  forecast: `
      outside forecast <options>
      --location, -l ..... the location to use`,
};

module.exports = (args) => {
  const subCmd =
    args._[0] === "help" ? args._[1] : args._[0] || args.h || args.help;
  console.log(menus[subCmd] || menus.main);
};
