document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('careerForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const qualification = document.getElementById('qualification').value;
            const learningGoals = document.getElementById('learningGoals').value;

            let roadmapUrl = '';

            // Map learning goals to corresponding URLs based on qualification
            if (qualification === 'highschool') {
                roadmapUrl = learningGoals === 'programming' ? 'hightech.html' :
                              learningGoals === 'dataAnalysis' ? 'high.html' :
                              learningGoals === 'digitalMarketing' ? 'highbusi.html' :
                              learningGoals === 'graphicDesign' ? 'highSoftware.html' :
                              learningGoals === 'psychology' ? 'highPsyco.html' :
                              learningGoals === 'businessManagement' ? 'highBusiMngt.html' :
                              learningGoals === 'machineLearning' ? 'highML.html' :
                              learningGoals === 'artHistory' ? 'highARTS.html' :
                              learningGoals === 'musicTheory' ? 'highMusic.html' :
                              learningGoals === 'acting' ? 'highacting.html' :
                              'highacting.html';
            } else if (qualification === 'bachelor') {
                roadmapUrl = learningGoals === 'programming' ? 'bachelor_tech_prog.html' :
                              learningGoals === 'dataAnalysis' ? 'bachelor_tech_da.html' :
                              learningGoals === 'digitalMarketing' ? 'bachelor_tech_dm.html' :
                              learningGoals === 'graphicDesign' ? 'bachelor_tech_gd.html' :
                              learningGoals === 'psychology' ? 'bachelor_tech_psycho.html' :
                              learningGoals === 'businessManagement' ? 'bachelor_tech_bm.html' :
                              learningGoals === 'machineLearning' ? 'bachelor_tech_ml.html' :
                              learningGoals === 'artHistory' ? 'bachelor_tech_arts.html' :
                              learningGoals === 'musicTheory' ? 'bachelor_tech_music.html' :
                              learningGoals === 'acting' ? 'bachelor_tech_act.html' :
                              'bachelor_tech_act.html';
            } else if (qualification === 'master') {
                roadmapUrl = learningGoals === 'programming' ? 'masterTechPro.html' :
                              learningGoals === 'dataAnalysis' ? 'masterTechData.html' :
                              learningGoals === 'digitalMarketing' ? 'masterDigital.html' :
                              learningGoals === 'graphicDesign' ? 'masterSoftware.html' :
                              learningGoals === 'psychology' ? 'masterPsyco.html' :
                              learningGoals === 'businessManagement' ? 'masterBusi.html' :
                              learningGoals === 'machineLearning' ? 'masterML.html' :
                              learningGoals === 'artHistory' ? 'masterARTS.html' :
                              learningGoals === 'musicTheory' ? 'masterMusic.html' :
                              learningGoals === 'acting' ? 'masterAct.html' :
                              'masterAct.html';
            } else if (qualification === 'highschool_drop') {
                roadmapUrl = learningGoals === 'programming' ? 'highschool_drop_techpro.html' :
                              learningGoals === 'dataAnalysis' ? 'highschool_drop_da.html' :
                              learningGoals === 'digitalMarketing' ? 'highschool_drop_dm.html' :
                              learningGoals === 'graphicDesign' ? 'highschool_drop_gd.html' :
                              learningGoals === 'psychology' ? 'highschool_drop_psycho.html' :
                              learningGoals === 'businessManagement' ? 'highschool_drop_bm.html' :
                              learningGoals === 'machineLearning' ? 'highschool_drop_ml.html' :
                              learningGoals === 'artHistory' ? 'highschool_drop_art.html' :
                              learningGoals === 'musicTheory' ? 'highschool_drop_music.html' :
                              learningGoals === 'acting' ? 'highschool_drop_act.html' :
                              'highschool_drop_act.html';
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
