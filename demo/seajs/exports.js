define(function (require,exports,module) {
    
    function Perseon (name,age) {
        this.name = name;
        this.age = age;
    }

    Perseon.prototype.show = function () {
        console.log(this.name);
    }

    //exports.Perseon = Perseon;
    //module.exports.Perseon = Perseon;
    return Perseon;
});