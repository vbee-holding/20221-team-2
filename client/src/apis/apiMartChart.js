export const Bracket = [

  //CK
  {
    id: 1,// id trận đấu
    nextMatchId: null, // mã trận đấu tiếp theo của đội thắng, nếu là trận chung kết và trận tranh hạng ba thì trả về là null
    tournamentRoundText: "4",// vòng 16 = 1,vòng tứ kết  = 2, vòng bán kết = 3, vòng chung kết = 4
    startTime: "2021-12-18", // ngày thi đấu
    name: "Chung kết(KT-LL)", // Vòng đấu vd: vòng chung kết( kết thúc - có vòng luân lưu)
    participants: [
      {
          id: "14754a1a-932c-4992-8dec-f7f94a339960", // id đội bóng
          resultText: "3(4)" , // tỷ số tỷ số hiệp chính(tỷ số luân lưu)
          isWinner: true, // trạng thái đội - thắng(true)/ thua(false)
          name: "ARG", // tên đội bóng
          picture: "teamlogos/client_team_default_logo", // logo đội bóng
          IdMatchs: []
        },
        {
          id: "14754a1a-932c-4992-8dec-f7f94a339960",// id đội bóng
          resultText: "3(2)",// tỷ số tỷ số hiệp chính(tỷ số luân lưu)
          isWinner: false,// trạng thái đội - thắng(true)/ thua(false)
          name: "FRA",// tên đội bóng
          picture: "teamlogos/client_team_default_logo",// logo đội bóng
          IdMatchs: []
        }
    ]
  },


  // BK2
  {
    id: 19754,
    nextMatchId: 1,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: null,
        isWinner: false,
        status: null,
        name: "CoKe BoYz",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },

  //Tk3
  {
    id: 19755,
    nextMatchId: 19754,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "2",
        isWinner: true,
        status: "PLAYED",
        name: "tk3",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
        resultText: "1",
        isWinner: false,
        status: "PLAYED",
        name: "tk3 -2",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },

  //Vong 16 3
  {
      id: 19764,
      nextMatchId: 19755,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "team 5",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "team 6",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },
    {
      id: 19765,
      nextMatchId: 19755,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "BLUEJAYS",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Bosphorus",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },
  //


  //TK 4
  {
    id: 19756,
    nextMatchId: 19754,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "RUNNING",
    participants: [
      {
        id: "d8b9f00a-0ffa-4527-8316-da701894768e",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Art of kill",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },

  //Vong 16 4
  {
      id: 19766,
      nextMatchId: 19756,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "team 7",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "team 8",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },
    {
      id: 19767,
      nextMatchId: 19756,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "BLUEJAYS",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Bosphorus",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },

  //
  //

//


  //BK 1
  {
    id: 19757,
    nextMatchId: 1,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: []
  },

  // TK1
  {
    id: 19758,
    nextMatchId: 19757,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "9397971f-4b2f-44eb-a094-722eb286c59b",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Crazy Pepes",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },
  // vong 16 1
  {
      id: 19760,
      nextMatchId: 19758,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: " team 1",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: " team 2",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },
    {
      id: 19761,
      nextMatchId: 19758,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "BLUEJAYS",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Bosphorus",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },
  //
  //
  // TK2
  {
    id: 19759,
    nextMatchId: 19757,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "42fecd89-dc83-4821-80d3-718acb50a30c",
        resultText: null,
        isWinner: false,
        status: null,
        name: "BLUEJAYS",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Bosphorus",
        picture: "teamlogos/r7zn4gr8eajivapvjyzd"
      }
    ]
  },
  //vong 16 2
  {
      id: 19762,
      nextMatchId: 19759,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "team 3",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "team 4",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },

    {
      id: 19763,
      nextMatchId: 19759,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "BLUEJAYS",
          picture: "teamlogos/client_team_default_logo"
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Bosphorus",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
      ]
    },
  //
  //
];
