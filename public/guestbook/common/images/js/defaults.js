defaults = {
  tinterfaceURL: 'default-interface.jsp',
  tAdd: function(_strfname)
  {
    var tstrfname = _strfname;
    var tformObj = $I(tstrfname);
    if (tformObj)
    {
      var tformBeObj = $I(tstrfname + 'BeforeAction');
      if (tformBeObj) eval(tformBeObj.value);
      if (wfront.validator.tCheck(tformObj))
      {
        var tAction = tformObj.action;
        var tstrform = cls.form.tgetValues(tformObj);
        $I('ajaxSubmit').disabled = true;
        cls.tiposts(tAction, tstrform, defaults.tAdds);
      };
    };
  },
  tAdds: function(_strers)
  {
    var tstrers = _strers;
    $I('ajaxSubmit').disabled = false;
    if (wfront.tckBackString(tstrers))
    {
      tstrers = wfront.tckrBackString(tstrers);
      if (tstrers.indexOf('<!--200-->') == -1)
      {
        alert(tstrers);
      }
      else
      {
        alert(tstrers.substr(10));
        location.href = './?type=list';
      };
    };
  }
};
