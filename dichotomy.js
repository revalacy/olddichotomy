require('./express.js');

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var creds = require('./client_secret.json');



// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1biR91hkpQlMBA6L_jI3vt8kSQS-10kuislUSjr_mKMw');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {


});

client.on("ready", () => {
 console.log("I am ready!");
});



// Set the prefix
client.on("message", (message) => {
 const args = message.content.slice(config.prefix.length).trim().replace("+ ","+").replace("- ","-").split(/ +(?![^\[]*\])/g);
 const command = args.shift().toLowerCase();
 var name = args[0];
 var stat = args[1];
 var roll = Math.floor(Math.random() *10)+1;
 const medpearl = client.channels.get("481931772540485648");
 const cmdpearl = client.channels.get("481931801884098566");
 const mom = client.users.get("453297386119233557");
 const dad = client.users.get("133350100264157195");
 
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  var dmgres1 = function (){
    doc.getRows(7,{
      'query': `char = "` +name + `"`
    },function(err,row){
      let dmg = row[0].pendingdmg1;

      doc.getRows(6,{
        'query': `char = "` +name + `"`
      },function(err,row){
        let oldhp = row[0].hp;
        let max = row[0].max;
        let newhp = +oldhp + +dmg;

        if (+newhp === "0"){
          row[0].hp = "Incapacitated";
          medalert();
          row[0].save()
        }else{
        if(+max <= +newhp){
          row[0].hp = max;
          row[0].save()
        }
        else{
          if(+newhp < 4){
            medalert();
          };
          row[0].hp = newhp;
          row[0].save()
        }}
      })
      row[0].pendingatk1 = "0";
      row[0].attacker1 = "";
      row[0].pendingdmg1="0";
      row[0].defense1 = "";
      row[0].save();

      doc.getRows(1,{
        'query': 'char = "' + name + '"'
      },function(err,row){
        let mindef = row[0].mindef;

        doc.getRows(7,{
          'query': 'char = "' + name + '"'
        },function(err,row){
          row[0].mindef = mindef;
          row[0].save()
        }
          )
      }
        )
    }
    )};

  var dmgres2 = function (){
    doc.getRows(7,{
      'query': `char = "` +name + `"`
    },function(err,row){
      let dmg = row[0].pendingdmg2;

      doc.getRows(6,{
        'query': `char = "` +name + `"`
      },function(err,row){
        let oldhp = row[0].hp;
        let max = row[0].max;
        let newhp = +oldhp + +dmg;

        if (+newhp === "0"){
          row[0].hp = "Incapacitated";
          medalert();
          row[0].save()
        }else{
        if(+max <= +newhp){
          row[0].hp = max;
          row[0].save()
        }
        else{
          if(+newhp < 4){
            medalert();
          };
          row[0].hp = newhp;
          row[0].save()
        }}
      })
      row[0].pendingatk2 = "0";
      row[0].attacker2 = "";
      row[0].pendingdmg2 ="0";
      row[0].defense2 = "";
      row[0].save();
      
      doc.getRows(1,{
        'query': 'char = "' + name + '"'
      },function(err,row){
        let mindef = row[0].mindef;

        doc.getRows(7,{
          'query': 'char = "' + name + '"'
        },function(err,row){
          row[0].mindef = mindef;
          row[0].save()
        }
          )
      }
        )
    }
    )};

  var dmgres3 = function (){
    doc.getRows(7,{
      'query': `char = "` +name + `"`
    },function(err,row){
      let dmg = row[0].pendingdmg3;

      doc.getRows(6,{
        'query': `char = "` +name + `"`
      },function(err,row){
        let oldhp = row[0].hp;
        let max = row[0].max;
        let newhp = +oldhp + +dmg;

        if (+newhp === "0"){
          row[0].hp = "Incapacitated";
          medalert();
          row[0].save()
        }else{

        if(+max <= +newhp){
          row[0].hp = max;
          row[0].save()
        }
        else{
          if(+newhp < 4){
            medalert();
          };
          row[0].hp = newhp;
          row[0].save()
        }}
      })
      row[0].pendingatk3 = "0";
      row[0].attacker3 = "";
      row[0].pendingdmg3 ="0";
      row[0].defense3 = "";
      row[0].save();
      
      doc.getRows(1,{
        'query': 'char = "' + name + '"'
      },function(err,row){
        let mindef = row[0].mindef;

        doc.getRows(7,{
          'query': 'char = "' + name + '"'
        },function(err,row){
          row[0].mindef = mindef;
          row[0].save()
        }
          )
      }
        )
    }
    )};

  var dmgres4 = function (){
    doc.getRows(7,{
      'query': `char = "` +name + `"`
    },function(err,row){
      let dmg = row[0].pendingdmg4;

      doc.getRows(6,{
        'query': `char = "` +name + `"`
      },function(err,row){
        let oldhp = row[0].hp;
        let max = row[0].max;
        let newhp = +oldhp + +dmg;

        if (+newhp === "0"){
          row[0].hp = "Incapacitated";
          medalert();
          row[0].save()
        }else{
        if(+max <= +newhp){
          row[0].hp = max;
          row[0].save()
        }
        else{
          if(+newhp < 4){
            medalert();
          };
          row[0].hp = newhp;
          row[0].save()
        }}
      })
      row[0].pendingatk4 = "0";
      row[0].attacker4 = "";
      row[0].pendingdmg4 ="0";
      row[0].defense4 = "";
      row[0].save();
      
      doc.getRows(1,{
        'query': 'char = "' + name + '"'
      },function(err,row){
        let mindef = row[0].mindef;

        doc.getRows(7,{
          'query': 'char = "' + name + '"'
        },function(err,row){
          row[0].mindef = mindef;
          row[0].save()
        }
          )
      }
        )
    }
    )};

  var healdefreset = function(){
    doc.getRows(1,{
      'query':'char = "' + stat + '"'
    },function(err,row){
      let mindef = row[0].mindef;

      doc.getRows(6,{
        'query': 'char = "' + stat + '"'
      },function(err,row){
        row[0].mindef=mindef;
        row[0].save()
      }
        )
    }
    )
  }
  var atkreset = function(){
    doc.getRows(7,{
      'query': 'char = "' + name + '"'
    },function(err,row){
      row[0].atk = 0;
      row[0].save()
    }
    )};

  var medalert = function(){
    medpearl.send("**[Gods' View]** ALERT: **" + name + "** has suffered a critical injury. Response team requested.");
    cmdpearl.send("**[Gods' View]** ALERT: **"+name+"** has suffered a critical injury. Medical has been notified.")
  };

  var doom = function(){
    doc.getRows(9,{
      'query':'char = "' + name + '"'
    },function (err,row){
      let old = row[0].points;
      let doom = +old + 1;
      row[0].points = doom;
      row[0].save()
    }
      )
  };

  if (command === "test") {
    medalert()
  }

  if (command === "roll") {
            let stat = args[1];
            let bonus = args[2]||"0";
      
      if(!name)
              return message.channel.send(`${message.author} please add the **first name** of your character to the roll.`);
      if(!stat)
              return message.channel.send(`${message.author} please add the **relevant stat** to your roll command.`);
            
            doc.getRows(1,{
             'query': `char = "` +name + `"`,
            },function(err,row){
               let modifier=row[0][stat];
               var total = +roll + +modifier + +bonus;
               var bns = bonus.replace(/\+/g," + ").replace(/\-/g," + -").replace("0","");
              if (+total < 2){
                doom()
              };

              doc.getRows(5,{
                'query': `threshold = ` +total
              },function(err,row){
                let translate = row[0].replace;
                let response = row[0].roll;
                console.log(total+" "+roll+" "+modifier+" "+response+" "+bns)
                message.channel.send(`**`+name+`** rolled **`+translate+`** `+response+` **[`+roll+` + `+modifier+bns+`]**`);
                });
              
              
              })
            }
            

//Madness Commands------------------------------------------------------------------------------------------------------------------------------------------------------------------//     

  if (command === "sanity") {
           var dateObj = new Date();
           var month = dateObj.getUTCMonth() + 1; //months from 1-12
           var day = dateObj.getUTCDate();
           var year = dateObj.getUTCFullYear();
           let newdate = month + "/" + day + "/" + year;

           doc.getRows(2,{
              'query': `char = "` +name + `"`,
            },function(err,row){
          let threshold = row[0].min;
          
       if(!name)
              return message.channel.send(`${message.author} please add the **first name** of your character to the roll.`);
              
           if(+roll <= +threshold){
             doc.addRow(3, { char: name, date: newdate, type: 'sanity' }, function(err) {
               if(err) {
                 console.log(err);
               }
             });
             message.channel.send(`**` + name + `** rolled **` + roll + '** and **failed**. Another Madness point will be accrued unless a point of Willpower is spent.')  
             }
             else{
              message.channel.send(`**` + name + `** rolled **` + roll + '** and **succeeded**. No additional Madness point is gained.') 
             }
            
           })}  
  if (command === "exposure") {
           let lvl = args[1];

           var dateObj = new Date();
           var month = dateObj.getUTCMonth() + 1; //months from 1-12
           var day = dateObj.getUTCDate();
           var year = dateObj.getUTCFullYear();
           let newdate = month + "/" + day + "/" + year;
          
       if(!name)
              return message.channel.send(`${message.author} please add the **first name** of your character to the roll. The command is: \`/exposure Name level\`.`);
      
       if(!lvl)
              return message.channel.send(`${message.author} please add the **level** of your exposure to the roll. The command is: \`/exposure Name level\`.`);
      
       doc.getRows(8,{
              'query': `level = ` + +lvl ,
            },function(err,row){
          let threshold = row[0].min;         
    
    
           if(+roll <= +threshold){
             doc.addRow(3, { char: name, date: newdate, type: 'sanity' }, function(err) {
               if(err) {
                 console.log(err);
               }
             });
             message.channel.send(`**` + name + `** rolled **` + roll + '** and **failed**. Another Madness point will be accrued unless a point of Willpower is spent.')  
             }
             else{
              message.channel.send(`**` + name + `** rolled **` + roll + '** and **succeeded**. No additional Madness point is gained.') 
             }
            
           })}
  if (command === "passive"){
    var dateObj = new Date();
          var month = dateObj.getUTCMonth() + 1; //months from 1-12
          var day = dateObj.getUTCDate();
          var year = dateObj.getUTCFullYear();

          let newdate = month + "/" + day + "/" + year;
    if(!name)
          return message.channel.send(`${message.author} please add the **first name** of your character to the roll.`);
    message.channel.send(name + ` has chosen to take 1 point of Madness passively for today.`);
    doc.addRow(3, { char: name, date: newdate, type: 'sanity' }, function(err) {
      if(err) {
        console.log(err);
      }
    });
    }
  if (command === "dose"){
  var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        let newdate = month + "/" + day + "/" + year;
  if(!name)
          return message.channel.send(`${message.author} please add the **first name** of your character to the roll.`);
  message.channel.send(name + ` has taken a dose of **Elysian tonic**. This grants you the benefit of concentrated Euphoria, as well as granting **+3** Madness points.`);
  doc.addRow(3, { char: name, date: newdate, type: 'dose' }, function(err) {
    if(err) {
      console.log(err);
    }
  });
    }
  if (command === "willpower"){
            let spec = args[1]||"standard";
            var dateObj = new Date();
                  var month = dateObj.getUTCMonth() + 1; //months from 1-12
                  var day = dateObj.getUTCDate();
                  var year = dateObj.getUTCFullYear();
      
                  let newdate = month + "/" + day + "/" + year;
            
            if(!name)
                   return message.channel.send(`${message.author} please add the **first name** of your character to the roll.`);
            if(spec === "standard"){
                   message.channel.send(name + ` has chosen to spend 1 point of Willpower to overcome a mental obstacle.`);
                   doc.getRows(5,{
                    'query': "char = " + name,
                  }, function (err, row) {
                    let wp = row[0].willpower;
                    let wpnew = wp - 1;
                    row[0].willpower = wpnew;
                    row[0].save() // this is async
                  });
            };
            if(spec === "madness"){
              message.channel.send(name + ` has chosen to spend 1 point of Willpower to negate a point of Madness.`);
            doc.getRows(4,{
              'query': "char = " + name,
            }, function (err, row) {
              let wp = row[0].willpower;
              let wpnew = wp - 1;
              row[0].willpower = wpnew;
              row[0].save() // this is async
            });
            
            doc.addRow(3, { char: name, date: newdate, type: 'willpower' }, function(err) {
              if(err) {
                console.log(err);
              }
            });
          }
        }

//Action Commands------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  if (command === "attack"){
        let target = args[2];
        let bonus = args[3]||"0";
        

        //get Attack, determine if attack is large enough to move forward
        doc.getRows(7,{
          'query': `char = "` + name + `"`
        }, function(err,row){
          var modifier = row[0][stat];
          var bns = bonus.replace(/\+/g," + ").replace(/\-/g," + -").replace("0","");
          var atk = row[0].atk;
          var total = +roll + +modifier + +bonus + +atk;
          
          //if you are attacking yourself, return, otherwise move forward

          if (name === target){
            return message.channel.send("Wait why the fuck are you attacking yourself? Please choose a target other than you!")
          };

          //if total is less than 5, return, otherwise move forward

          if(total < 5){
            return message.channel.send(`**`+name+`** has attacked **` + target + `** and rolled a **` + total + `**. It wasn't very effective. **[`+roll+` + `+modifier+bns+`]**`)
          }else{
            //set pending attack
            doc.getRows(7,{
              'query': `char ="` + target + `"`
            },function(err,row){
              let attacker1 = row[0].attacker1;
              let attacker2 = row[0].attacker2;
              let attacker3 = row[0].attacker3;
              let attacker4 = row[0].attacker4;

              if(attacker1 === ""){
                row[0].attacker1 = name;
                row[0].pendingatk1 = total;
                row[0].defense1 = "PENDING";
                row[0].save();

                message.channel.send (`**` + name + `** has attacked **` + target + `** and rolled a **` + total + `**. Roll defense! **[`+roll+` + `+modifier+bns+`]**`);

                atkreset()
              }else{
                if (attacker2 === ""){
                  row[0].attacker2 = name;
                  row[0].pendingatk2 = total;
                  row[0].defense2 = "PENDING";
                  row[0].save();

                  message.channel.send (`**` + name + `** has attacked **` + target + `** and rolled a **` + total + `**. Roll defense! **[`+roll+` + `+modifier+bns+`]**`);

                  atkreset()
                }else{
                  if(attacker3 === ""){
                  row[0].attacker3 = name;
                  row[0].pendingatk3 = total;
                  row[0].defense3 = "PENDING";
                  row[0].save();

                  message.channel.send (`**` + name + `** has attacked **` + target + `** and rolled a **` + total + `**. Roll defense! **[`+roll+` + `+modifier+bns+`]**`);

                  atkreset()
                  }else{
                    if(attacker4 === ""){
                      row[0].attacker4 = name;
                      row[0].pendingatk4 = total;
                      row[0].defense4 = "PENDING";
                      row[0].save();

                      message.channel.send (`**` + name + `** has attacked **` + target + `** and rolled a **` + total + `**. Roll defense! **[`+roll+` + `+modifier+bns+`]**`);

                      atkreset()
                    }else{
                      return message.channel.send('**' +target + "** has too many people around them, please wait for at least one attack to resolve!")
                    }
                  }
                }
              }
            }
            
            )

          }
        }
        )}

  if (command === "defense"){
        let bonus = stat||"0";
        if (typeof bonus != 'number'){
          
          bonus = 0;
        };
        //get attacker info
        doc.getRows(7,{
          'query': 'char = "' + name + `"`
        },function(err,row){
          let atkr1 = row[0].attacker1;
          let atkr2 = row[0].attacker2;
          let atkr3 = row[0].attacker3;
          let atkr4 = row[0].attacker4;
          let def1 = row[0].defense1;
          let def2 = row[0].defense2;
          let def3 = row[0].defense3;
          let def4 = row[0].defense4;
          console.log(atkr1);
          
          if (atkr1 != "" && def1 === "PENDING"){
              let attack = row[0].pendingatk1;
              let mindef = row[0].mindef;
              let attacker = row[0].attacker1
              var defense = +roll + +mindef + +bonus;
              var vs = +defense + ` vs `+attack+`]**`;
              var successmsg = `**`+name+`** successfully defended against the attack by **` + attacker + `**! **[`;
              var failmsg = `**`+name+`** failed to defend against the attack by **` + attacker + `**! There are now **5** minutes to successfully cover them or damage will be taken! **[`;

              if (+attack <= +defense){
                message.channel.send(successmsg + vs);

                return dmgres1();

              }else{
                message.channel.send(failmsg + vs);
                //get pending damage, set countdown timer
                doc.getRows(5,{
                  'query':`threshold = ` + +attack
                },function(err,row){
                  let damage = row[0].dmgtarget;

                  doc.getRows(7,{
                    'query': 'char = "' + name + `"`
                  },function(err,row){
                    row[0].pendingdmg1 = damage;
                    row[0].defense1 = "FAILED";
                    row[0].save();

                    return setTimeout(dmgres1, 30000);
                  }
                    )
                }
                )
              }

          }else{
            if (atkr2 != "" && def2 === "PENDING"){
              let attack = row[0].pendingatk2;
              let mindef = row[0].mindef;
              let attacker = row[0].attacker2
              var defense = +roll + +mindef + +bonus;
              var vs = +defense + ` vs `+attack+`]**`;
              var successmsg = `**`+name+`** successfully defended against the attack by **` + attacker + `**! **[`;
              var failmsg = `**`+name+`** failed to defend against the attack by **` + attacker + `**! There are now **5** minutes to successfully cover them or damage will be taken! **[`;

              if (+attack <= +defense){
                message.channel.send(successmsg + vs);

                return dmgres2();

              }else{
                message.channel.send(failmsg + vs);
                //get pending damage, set countdown timer
                doc.getRows(5,{
                  'query':`threshold = ` + +attack
                },function(err,row){
                  let damage = row[0].dmgtarget;

                  doc.getRows(7,{
                    'query': 'char = "' + name + `"`
                  },function(err,row){
                    row[0].pendingdmg2 = damage;
                    row[0].defense2 = "FAILED";
                    row[0].save();

                    return setTimeout(dmgres2, 30000);
                  }
                    )
                }
                )
              }

          }else{
            if (atkr3 != "" && def3 === "PENDING"){
              let attack = row[0].pendingatk3;
              let mindef = row[0].mindef;
              let attacker = row[0].attacker3
              var defense = +roll + +mindef + +bonus;
              var vs = +defense + ` vs `+attack+`]**`;
              var successmsg = `**`+name+`** successfully defended against the attack by **` + attacker + `**! **[`;
              var failmsg = `**`+name+`** failed to defend against the attack by **` + attacker + `**! There are now **5** minutes to successfully cover them or damage will be taken! **[`;

              if (+attack <= +defense){
                message.channel.send(successmsg + vs);

                return dmgres3();

              }else{
                message.channel.send(failmsg + vs);
                //get pending damage, set countdown timer
                doc.getRows(5,{
                  'query':`threshold = ` + +attack
                },function(err,row){
                  let damage = row[0].dmgtarget;

                  doc.getRows(7,{
                    'query': 'char = "' + name + `"`
                  },function(err,row){
                    row[0].pendingdmg3 = damage;
                    row[0].defense3 = "FAILED";
                    row[0].save();

                    return setTimeout(dmgres3, 30000);
                  }
                    )
                }
                )
              }

          }else{
            if (atkr4 != "" && def4 === "PENDING"){
              let attack = row[0].pendingatk4;
              let mindef = row[0].mindef;
              let attacker = row[0].attacker4
              var defense = +roll + +mindef + +bonus;
              var vs = +defense + ` vs `+attack+`]**`;
              var successmsg = `**`+name+`** successfully defended against the attack by **` + attacker + `**! **[`;
              var failmsg = `**`+name+`** failed to defend against the attack by **` + attacker + `**! There are now **5** minutes to successfully cover them or damage will be taken! **[`;

              if (+attack <= +defense){
                message.channel.send(successmsg + vs);

                return dmgres4();

              }else{
                message.channel.send(failmsg + vs);
                //get pending damage, set countdown timer
                doc.getRows(5,{
                  'query':`threshold = ` + +attack
                },function(err,row){
                  let damage = row[0].dmgtarget;

                  doc.getRows(7,{
                    'query': 'char = "' + name + `"`
                  },function(err,row){
                    row[0].pendingdmg4 = damage;
                    row[0].defense4 = "FAILED";
                    row[0].save();

                    return setTimeout(dmgres4, 30000);
                  }
                    )
                }
                )
              }

          }else{
                  return message.channel.send(`${message.author},you appear to have no attacks against you pending. Please check your pending attacks and try the command again.`)
                }
              }
            }
          }
        }
        )
     }

  if (command === "cover"){
       let target = stat;
       let bonus = args[2]||"0";
    
      if (target === name){
        return message.channel.send('You can\'t cover yourself! If there are any pending attacks you may attempt to stop them with /defense.')
      }
       doc.getRows(7,{
         'query': `char = "` + target + `"`
       },function(err,row){
         let atk1 = row[0].pendingdmg1;
         let atk2 = row[0].pendingdmg2;
         let atk3 = row[0].pendingdmg3;
         let atk4 = row[0].pendingdmg4;
         var defense = +roll + +bonus;
         var successmsg = '**'+name+`** rolled **`+defense+`** and successfully defended **`+target+`**! No damage taken!`;
         var failmsg = '**'+name+`** rolled **`+defense+`** and failed to defend **`+target+`** from an incoming attack! Can anyone else save them?`;

         if(+atk1 < 0){
          doc.getRows(7,{
            'query': `char = "` + target + `"`
          },function(err,row){         

            if(+defense < 7){
              return message.channel.send(failmsg)

            }else{
              row[0].pendingdmg1 = "0";
              row[0].save();

              return message.channel.send(successmsg)
            }
          }

          )
         }else{
           if (+atk2 < 0){
            doc.getRows(7,{
              'query': `char = "` + target + `"`
            },function(err,row){         
  
              if(+defense < 7){
                return message.channel.send(failmsg)
  
              }else{
                row[0].pendingdmg2 = "0";
                row[0].save();
  
                return message.channel.send(successmsg)
              }
            })
           }else{
             if(+atk3 < 0){
              doc.getRows(7,{
                'query': `char = "` + target + `"`
              },function(err,row){         
    
                if(+defense < 7){
                  return message.channel.send(failmsg)
    
                }else{
                  row[0].pendingdmg3 = "0";
                  row[0].save();
    
                  return message.channel.send(successmsg)
                }
              }
    
              )
             }else{
               if(+atk4 < 0){
                 doc.getRows(7,{
                  'query': `char = "` + target + `"`
                },function(err,row){         
      
                  if(+defense < 7){
                    return message.channel.send(failmsg)
      
                  }else{
                    row[0].pendingdmg4 = "0";
                    row[0].save();
      
                    return message.channel.send(successmsg)
                  }
                }
      
                )
               }else{
                  return message.channel.send(`Whoa! Calm down there **`+ name + `**! **`+ target + `** might still need to roll **Defense**.`)
               }
             }
           }
         }
       })

     }

  if (command === "heal") {
      let target = args[1];
      let bonus = args[2]||"0";

      if(!name)
              return message.channel.send(`${message.author} please add the **first name** of **your** character to the roll.`);
      if(!target)
              return message.channel.send(`${message.author} please add your **target's first name** to your roll command.`);
            
            doc.getRows(1,{
            'query': `char = "` +name + `"`,
            },function(err,row){
              let modifier=row[0].int;
              var total = +roll + +modifier + +bonus;
              var bns = bonus.replace(/\+/g," + ").replace(/\-/g," + -").replace("0","");
              
              doc.getRows(5,{
                'query': `threshold = ` +total
              },function(err,row){
                let response = row[0].heal;
                let hpmod = row[0].healeffect;

              doc.getRows(6,{
                'query': `char = "` +target + `"`
              },function(err,row){
                let oldhp = row[0].hp;
                let max = row[0].max;
                let newhp = +oldhp + +hpmod;

                if(+max <= +newhp){
                  row[0].hp = max;
                  row[0].save();
                  
                  healdefreset()
                  }
                  else{
                    row[0].hp = newhp;
                    row[0].save();

                    healdefreset()
                  }
              });
                message.channel.send(`**`+name+`** rolled **`+total+`**. `+response+` **[`+roll+` + `+modifier+bns+`]**`);
                });
              })
     }

  if (command === "buff") {
    let target = stat;
    let type = args[2];
    let bonus = args[3]||"0";

    //get int value
    doc.getRows(1,{
      'query': `char = "` +name + `"`,
     },function(err,row){
        let modifier=row[0].int;
        var total = +roll + +modifier + +bonus;
        var bns = bonus.replace(/\+/g," + ").replace(/\-/g," + -").replace("0","");
       if (+total < 2){
         doom()
       };
       //get response and buff modifier
       doc.getRows(5,{
         'query': `threshold = ` +total
       },function(err,row){
         let translate = row[0].replace;
         let response = row[0].support;
         let buff = row[0].buffval;

        //add buff to target
        
        doc.getRows(6,{
          'query':'char = "' + target + `"`
        },function(err,row){
          let atk = row[0].atk;
          let def = row[0].mindef;

          if (type === "attack"|| type === "atk" || type === "attk" || type === "attac" || type === "attak" || type === "atack"){
            let newval = +atk + +buff;
            row[0].atk = newval;
            row[0].save();

            return message.channel.send(`**`+name+`** rolled a **`+translate+`** `+response+` **`+target+`'s** attack. **[`+roll+` + `+modifier+bns+`]**`)
          }else{
            if (type === "defense" || type === "defens" || type === "defend" || type === "def" || type === "defesne" || type === "defen" || type === "defense" || type === "dfense"){
            let newval = +def + +buff;
            row[0].def = newval;
            row[0].save();

            return message.channel.send(`**`+name+`** rolled a **`+translate+`** `+response+` **`+target+`'s** defense. **[`+roll+` + `+modifier+bns+`]**`)
            }else{
              return message.channel.send("Having some difficulty understanding what type of buff you are casting. Please check your spelling and try again!")
            }
          }
        }
          )
        
        });
       
       
       })

     }

  if (command === "disobey"){
    if(message.channel.type !== "dm") 
      return message.channel.send(`You probably want to take that to DMs!`);
    
    let action = stat.replace("[","").replace("]","");

      //get res value
    doc.getRows(1,{'query': 'char = "'+name+`"`},function(err,row){
      let res = row[0].res;
      var sneak = +roll + +res;
      
      

      doc.getRows(5,{
        'query': `threshold = ` +sneak
      },function(err,row){
        let translate = row[0].replace;
        let response = row[0].disobey;
        let punishment = row[0].punishment;
        let symptom = row[0].symptom;
          
          if (+sneak < 5){
            mom.send('**' + name + '** has disobeyed. **The attempt:** ' + action + '; **The punishment:** ' + symptom);
            dad.send('**' + name + '** has disobeyed. **The attempt:** ' + action + '; **The punishment:** ' + symptom);
          };

            message.channel.send(`**`+name+`** rolled a **`+translate+`**`+response+' ' + punishment+symptom);
            console.log(name + ` ` + action)
        });

    })

     }
//GM Commands------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    

 
//MISC Commands------------------------------------------------------------------------------------------------------------------------------------------------------------------//  
   if (command === "cointoss"){
     var flip = Math.floor(Math.random() *10)+1;
     if(flip>5){
       message.channel.send(`${message.author} flipped a coin! It came up **tails**.`)
     }
     if(flip<6){
       message.channel.send(`${message.author} flipped a coin! It came up **heads**.`)
     }
   }
   if (command === "dice"){
     message.channel.send(`${message.author} rolled **` + roll + `**.`)
   }
    if (command === "mystats"){
    let name=args[0];
    let type=args[1]||'all';
    if(!name)
             return message.channel.send(`${message.author} please add the **first name** of your character to the command.`);
      
    if (typeof name === 'undefined'){
      return message.channel.send ('Sorry but I cannot find any data for that character name! Please check your spelling and try again.')
    };
      
      console.log(name);
    
    if(type === 'all'){
     doc.getRows(1,{
       'query': 'char = "' + name + '"'
           }, function (err, row) {
           let job = row[0].class;
           let str = row[0].str;
           let dex = row[0].dex;
           let per = row[0].per;
           let cha = row[0].cha;
           let int = row[0].int;
           let wit = row[0].wit;
           let res = row[0].res;
           let mad = row[0].madness;
           let wp = row[0].wp;
           let hp = row[0].hp;

            if (typeof job === 'undefined'){
              return message.channel.send('I\'m having trouble locating a character by that name, please check the spelling and try again!')
            };

           message.author.send('Here are your stats:\n\n**Name:** '+name+'\n**Class:** '+job+'\n**STR:** '+str+'\n**DEX:** '+dex+'\n**PER:** '+per+'\n**CHA:** '+cha+'\n**INT:** '+int+'\n**WIT:** '+wit+'\n**RES:** '+res+'\n**Madness Points:** '+mad+'\n**Willpower:** '+wp+'\n**Current Health:** '+hp)
               })};
    if(type === 'points'){
      doc.getRows(1,{
        'query': "char = " + name,
            }, function (err, row) {
              let mad = row[0].madness;
              let wp = row[0].wp;
              let hp = row[0].hp;

              if (typeof mad === 'undefined'){
                message.channel.send('I\'m having trouble locating a character by that name, please check the spelling and try again!')
              };
              message.author.send('Here are your current points:\n\n**Name:** '+name+'\n**Madness Points: **'+mad+'\n**Willpower: **'+wp+'\n**Current Health:** '+hp)})}}     
    
  if(command === "random"){
      let roll = Math.floor(Math.random() *1000);
      message.channel.send(`Random! ${message.author} rolls a **` +roll+`**.`)
    }

if (command === "help") {
      let type = args[0]||"all";

      if (type === "all"){
       message.author.send('```AVAILABLE COMMANDS\n\n```\n\n*For the below commands, you will use these variables:*\n\n`X`: Your relevant ability modifier.\n`Y`: Your current stage or level.\n`Z`: Any bonus granted by the GM.\n`[Action declaration]`: The action you intend to take. Must be declared in brackets and with your roll command.\n`Name`: The name of the character taking the action.\n`Target`: The name of the character or entity you are targeting. For event enemies, consult the active combat tracker for a list of available targets.\n`Attacker`: The first name of the person or entity attacking you.\n```Standard Commands```\n\n`/roll Name X Z [Action declaration]`: Rolls 1d10 plus your relevant skill modifier. Evaluates success.\n`/dice`: Rolls 1d10. Does not evaluate success\n`/cointoss`: Tosses a coin, comes up heads or tails.\n`/willpower Name`: Spends +1 point of Willpower to overcome a mental hurdle.\n```Combat Commands```\n\n`/attack Name X Target`: Rolls 1d10 plus the relevant skill modifier. If not a failure, adds pending attack to target. Resolves immediately for NPCs.\n`/defense Name Attacker`: Rolls 1d10 plus the relevant skill modifier. If defense fails, opens 5-minute window for Cover.\n`cover Name Target`: Attempts to deflect an incoming attack away from the target. Can only be used after another person\'s failed defense.\n`/heal Name Target`: Rolls 1d10 plus the relevant skill modifier. Heals the target for the evaluated amount, based on INT modifier.\n```Madness Commands```\n\n`/sanity Name`: Rolls 1d10 and evaluates success or failure based on your Madness stage.\n`/exposure Name Y`: Rolls 1d10 and evaluates success or failure based on the length of time exposed to Miasma.\n`/willpower Name madness`: Spends +1 point of Willpower to negate an incurred point of Madness.`');
       message.channel.send(`You will receive a private message with all available commands.`)
      }
      if(type==="standard"){
        message.channel.send('```AVAILABLE COMMANDS\n\n```\n\n*For the below commands, you will use these variables:*\n\n`X`:  Your relevant ability short-hand (str, dex, per, cha, int, wit, res).\n`Y`: Your current stage or level.\n`Z`: Any bonus granted by the GM.\n`[Action declaration]`: The action you intend to take. Must be declared in brackets and with your roll command.\n`Name`: The name of the character taking the action.\n`Target`: The name of the character or entity you are targeting. For event enemies, consult the active combat tracker for a list of available targets.\n`Attacker`: The first name of the person or entity attacking you.\n```Standard Commands```\n\n`/roll Name X Z [Action declaration]`: Rolls 1d10 plus your relevant skill modifier. Evaluates success.\n`/dice`: Rolls 1d10. Does not evaluate success\n`/cointoss`: Tosses a coin, comes up heads or tails.\n`/willpower Name`: Spends +1 point of Willpower to overcome a mental hurdle.');
      }
      if (type==="combat"){
        message.channel.send('```AVAILABLE COMMANDS\n\n```\n\n*For the below commands, you will use these variables:*\n\n`X`:  Your relevant ability short-hand (str, dex, per, cha, int, wit, res).\n`Y`: Your current stage or level.\n`Z`: Any bonus granted by the GM.\n`[Action declaration]`: The action you intend to take. Must be declared in brackets and with your roll command.\n`Name`: The name of the character taking the action.\n`Target`: The name of the character or entity you are targeting. For event enemies, consult the active combat tracker for a list of available targets.\n`Attacker`: The first name of the person or entity attacking you.\n```Combat Commands```\n\n`/attack Name X Target`: Rolls 1d10 plus the relevant skill modifier. If not a failure, adds pending attack to target. Resolves immediately for NPCs.\n`/defense Name Attacker`: Rolls 1d10 plus the relevant skill modifier. If defense fails, opens 5-minute window for Cover.\n`cover Name Target`: Attempts to deflect an incoming attack away from the target. Can only be used after another person\'s failed defense.\n`/heal Name Target`: Rolls 1d10 plus the relevant skill modifier. Heals the target for the evaluated amount, based on INT modifier.');
      }
      if(type==="madness"){
        message.channel.send('```AVAILABLE COMMANDS\n\n```\n\n*For the below commands, you will use these variables:*\n\n`X`: Your relevant ability short-hand (str, dex, per, cha, int, wit, res).\n`Y`: Your current stage or level.\n`Z`: Any bonus granted by the GM.\n`[Action declaration]`: The action you intend to take. Must be declared in brackets and with your roll command.\n`Name`: The name of the character taking the action.\n`Target`: The name of the character or entity you are targeting. For event enemies, consult the active combat tracker for a list of available targets.\n`Attacker`: The first name of the person or entity attacking you.\n```Madness Commands```\n\n`/sanity Name`: Rolls 1d10 and evaluates success or failure based on your Madness stage.\n`/exposure Name Y`: Rolls 1d10 and evaluates success or failure based on the length of time exposed to Miasma.\n`/willpower Name madness`: Spends +1 point of Willpower to negate an incurred point of Madness.');
      }
   }
});

client.login(config.token);

