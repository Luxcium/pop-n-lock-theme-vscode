// record type // entity.name.type.record.cs
public record Item { public Guid id { get; init; } public string Name { get; init; } }
// should be colorised as class // entity.name.type.class.cs
public class Item { public Guid id { get; init; } public string Name { get; init; } }
