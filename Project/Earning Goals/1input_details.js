document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('careerForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const qualification = document.getElementById('qualification').value;
            const careerField = document.getElementById('careerField').value;
            const salary = parseInt(document.getElementById('salary').value, 10);

            let roadmapUrl = '';

            // Qualification: High School
            if (qualification === 'highschool_maths') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 400000 ? 'highschool_business.html' :
                                 salary <= 599999 ? 'highschool_business.html' : 'highschool_business.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 400000 ? 'highschool_psychology.html' :
                                 salary <= 599999 ? 'highschool_psychology.html' : 'highschool_psychology.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 400000 ? 'highschool_artist.html' :
                                 salary <= 599999 ? 'highschool_astist.html' : 'highschool_artist.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 400000 ? 'highschool_music.html' :
                                 salary <= 599999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 400000 ? 'highschool_actor.html' :
                                 salary <= 599999 ? 'highschool_actor.html' : 'highschool_actor.html';
                }
            }

            if (qualification === 'highschool_bio') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 400000 ? 'highschool_business.html' :
                                 salary <= 599999 ? 'highschool_business.html' : 'highschool_business.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 400000 ? 'highschool_psychology.html' :
                                 salary <= 599999 ? 'highschool_psychology.html' : 'highschool_psychology.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 400000 ? 'highschool_artist.html' :
                                 salary <= 599999 ? 'highschool_astist.html' : 'highschool_artist.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 400000 ? 'highschool_music.html' :
                                 salary <= 599999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 400000 ? 'highschool_actor.html' :
                                 salary <= 599999 ? 'highschool_actor.html' : 'highschool_actor.html';
                }
            }

            if (qualification === 'highschool_commerce') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 400000 ? 'highschool_business.html' :
                                 salary <= 599999 ? 'highschool_business.html' : 'highschool_business.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 400000 ? 'highschool_psychology.html' :
                                 salary <= 599999 ? 'highschool_psychology.html' : 'highschool_psychology.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 400000 ? 'highschool_artist.html' :
                                 salary <= 599999 ? 'highschool_astist.html' : 'highschool_artist.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 400000 ? 'highschool_music.html' :
                                 salary <= 599999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 400000 ? 'highschool_actor.html' :
                                 salary <= 599999 ? 'highschool_actor.html' : 'highschool_actor.html';
                }
            }

            if (qualification === 'highschool_arts') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 400000 ? 'highschool_business.html' :
                                 salary <= 599999 ? 'highschool_business.html' : 'highschool_business.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 400000 ? 'highschool_psychology.html' :
                                 salary <= 599999 ? 'highschool_psychology.html' : 'highschool_psychology.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 400000 ? 'highschool_artist.html' :
                                 salary <= 599999 ? 'highschool_astist.html' : 'highschool_artist.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 400000 ? 'highschool_music.html' :
                                 salary <= 599999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 400000 ? 'highschool_actor.html' :
                                 salary <= 599999 ? 'highschool_actor.html' : 'highschool_actor.html';
                }
            }

            
            //High School Dropped out
            if (qualification === 'highschool_drop') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 400000 ? 'highschool_drop_busi.html' :
                                 salary <= 599999 ? 'highschool_drop_busi.html' : 'highschool_drop_busi.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 400000 ? 'highschool_drop_psycho.html' :
                                 salary <= 599999 ? 'highschool_drop_psycho.html' : 'highschool_drop_psycho.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 400000 ? 'highschool_drop_artist.html' :
                                 salary <= 599999 ? 'highschool_drop_artist.html' : 'highschool_drop_artist.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 400000 ? 'highschool_drop_music.html' :
                                 salary <= 599999 ? 'highschool_drop_music.html' : 'highschool_drop_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 400000 ? 'highschool_drop_actor.html' :
                                 salary <= 599999 ? 'highschool_drop_actor.html' : 'highschool_drop_actor.html';
                }
            }

            

            // Qualification: Bachelor's Degree
            else if (qualification === 'bachelor_tech') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 600000 ? 'bach_techBusi.html' :
                                 salary <= 799999 ? 'bach_techBusi.html' : 'bach_techBusi.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 600000 ? 'bach_techPshyco.html' :
                                 salary <= 799999 ? 'bach_techPshyco.html' : 'bach_techPshyco.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 600000 ? 'bach_techArt.html' :
                                 salary <= 799999 ? 'bach_techArt.html' : 'bach_techArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 600000 ? 'highschool_music.html' :
                                 salary <= 799999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 600000 ? 'bach_techActing.html' :
                                 salary <= 799999 ? 'bach_techActing.html' : 'bach_techActing.html';
                }
            }

            // Qualification: Bachelor's Degree
            else if (qualification === 'bachelor_law') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawbus.html' :
                                 salary <= 799999 ? 'bach_lawbus.html' : 'bach_lawbus.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawpshyco.html' :
                                 salary <= 799999 ? 'bach_lawpshyco.html' : 'bach_lawpshyco.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawArt.html' :
                                 salary <= 799999 ? 'bach_lawArt.html' : 'bach_lawArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 600000 ? 'highschool_music.html' :
                                 salary <= 799999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawAct.html' :
                                 salary <= 799999 ? 'bach_lawAct.html' : 'bach_lawAct.html';
                }
            }

             // Qualification: Bachelor's Degree
             else if (qualification === 'bachelor_med') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawbus.html' :
                                 salary <= 799999 ? 'bach_lawbus.html' : 'bach_lawbus.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawpshyco.html' :
                                 salary <= 799999 ? 'bach_lawpshyco.html' : 'bach_lawpshyco.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawArt.html' :
                                 salary <= 799999 ? 'bach_lawArt.html' : 'bach_lawArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 600000 ? 'highschool_music.html' :
                                 salary <= 799999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawAct.html' :
                                 salary <= 799999 ? 'bach_lawAct.html' : 'bach_lawAct.html';
                }
            }


             // Qualification: Bachelor's Degree
             else if (qualification === 'bachelor_busi') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawbus.html' :
                                 salary <= 799999 ? 'bach_lawbus.html' : 'bach_lawbus.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawpshyco.html' :
                                 salary <= 799999 ? 'bach_lawpshyco.html' : 'bach_lawpshyco.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawArt.html' :
                                 salary <= 799999 ? 'bach_lawArt.html' : 'bach_lawArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 600000 ? 'highschool_music.html' :
                                 salary <= 799999 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 600000 ? 'bach_lawAct.html' :
                                 salary <= 799999 ? 'bach_lawAct.html' : 'bach_lawAct.html';
                }
            }


            
            // Qualification: Master's Degree
            else if (qualification === 'master_tech') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 800000 ? 'masterTechBs.html' :
                                 salary <= 1000000 ? 'masterTechBs.html' : 'masterTechBs.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 800000 ? 'masterTechpsycho.html' :
                                 salary <= 1000000 ? 'masterTechpsycho.html' : 'masterTechpsycho.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 800000 ? 'masterTechArt.html' :
                                 salary <= 1000000 ? 'masterTechArt.html' : 'masterTechArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 800000 ? 'highschool_music.html' :
                                 salary <= 1000000 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 800000 ? 'masterTechAct.html' :
                                 salary <= 1000000 ? 'masterTechAct.html' : 'masterTechAct.html';
                }
            }

            // Qualification: Master's Degree
            else if (qualification === 'master_law') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 800000 ? 'masterLawbs.html' :
                                 salary <= 1000000 ? 'masterLawbs.html' : 'masterLawbs.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 800000 ? 'masterLawPsycho.html' :
                                 salary <= 1000000 ? 'masterLawPsycho.html' : 'masterLawPsycho.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 800000 ? 'masterLawArt.html' :
                                 salary <= 1000000 ? 'masterLawArt.html' : 'masterLawArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 800000 ? 'highschool_music.html' :
                                 salary <= 1000000 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 800000 ? 'masterLawAct.html' :
                                 salary <= 1000000 ? 'masterLawAct.html' : 'masterLawAct.html';
                }
            }

            // Qualification: Master's Degree
            else if (qualification === 'master_busi') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 800000 ? 'masterBusinessbs.html' :
                                 salary <= 1000000 ? 'masterBusinessbs.html' : 'masterBusinessbs.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 800000 ? 'masterBusinessPsycho.html' :
                                 salary <= 1000000 ? 'masterBusinessPsycho.html' : 'masterBusinessPsycho.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 800000 ? 'masterBusinessArt.html' :
                                 salary <= 1000000 ? 'masterBusinessArt.html' : 'masterBusinessArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 800000 ? 'highschool_music.html' :
                                 salary <= 1000000 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 800000 ? 'masterBusinessAct.html' :
                                 salary <= 1000000 ? 'masterBusinessAct.html' : 'masterBusinessAct.html';
                }
            }

            // Qualification: Master's Degree
            else if (qualification === 'master_med') {
                if (careerField === 'business') {
                    roadmapUrl = salary <= 800000 ? 'masterMedicalBs.html' :
                                 salary <= 1000000 ? 'masterMedicalBs.html' : 'masterMedicalBs.html';
                } else if (careerField === 'psychology') {
                    roadmapUrl = salary <= 800000 ? 'masterMedicalpysho.html' :
                                 salary <= 1000000 ? 'masterMedicalpysho.html' : 'masterMedicalpysho.html';
                } else if (careerField === 'art') {
                    roadmapUrl = salary <= 800000 ? 'masterMedicalArt.html' :
                                 salary <= 1000000 ? 'masterMedicalArt.html' : 'masterMedicalArt.html';
                } else if (careerField === 'music') {
                    roadmapUrl = salary <= 800000 ? 'highschool_music.html' :
                                 salary <= 1000000 ? 'highschool_music.html' : 'highschool_music.html';
                } else if (careerField === 'acting') {
                    roadmapUrl = salary <= 800000 ? 'masterMedicalAct.html' :
                                 salary <= 1000000 ? 'masterMedicalAct.html' : 'masterMedicalAt.html';
                }
            }

           
            // Add fade-out effect
            document.body.classList.add('fade-out');

            // Wait for the animation to complete before redirecting
            setTimeout(() => {
                window.location.href = roadmapUrl;
            }, 500); // Match the duration of the fade-out effect
       });
   }
});
